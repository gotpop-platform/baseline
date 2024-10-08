import { BASE, router } from "../serve"
import {
  INTERNAL_SERVER_ERROR_RESPONSE,
  NOT_FOUND_RESPONSE,
  getBaseDomain,
  importModule,
} from "./routerHelpers"

export const handleGetPages = async (
  request: Request
): Promise<Response> => {
  try {
    const url = new URL(request.url)
    const baseUrl = new URL(BASE)
    const baseDomain = getBaseDomain(baseUrl.hostname)

    const route = router.match(request)

    if (!route) {
      return NOT_FOUND_RESPONSE
    }

    const module = await importModule(route.filePath)

    if (!module) {
      return NOT_FOUND_RESPONSE
    }

    if (typeof module.default !== "function") {
      console.error(
        "Default export is not a function:",
        module.default
      )
      return INTERNAL_SERVER_ERROR_RESPONSE
    }

    const slug = route.query.slug
      ? route.query.slug
      : route.pathname

    const response = await module
      .default({ slug })
      .catch((e: Error) => {
        console.error("Error calling default export:", e)

        return null
      })

    if (!response) {
      return NOT_FOUND_RESPONSE
    }

    return new Response(response, {
      headers: { "Content-Type": "text/html" },
    })
  } catch (e) {
    console.error("Unexpected error:", e)

    return INTERNAL_SERVER_ERROR_RESPONSE
  }
}
