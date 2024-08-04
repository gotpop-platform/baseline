import {
  ERROR_GENERATING_RESPONSE,
  INTERNAL_SERVER_ERROR_RESPONSE,
  MODULE_NOT_FOUND_RESPONSE,
  NOT_FOUND_RESPONSE,
  getBaseDomain,
  importModule
} from "./routerHelpers"

import { BASE } from "./serve"

export const handleGetPages = async (
  request: Request
): Promise<Response> => {
  try {
    const url = new URL(request.url)
    const baseUrl = new URL(BASE)
    const baseDomain = getBaseDomain(baseUrl.hostname)

    const router = new Bun.FileSystemRouter({
      style: "nextjs",
      dir : process.cwd() + '/src/pages',
    })

    const route = router.match(request)

    if (!route) {
      return NOT_FOUND_RESPONSE
    }

    const module = await importModule(route.filePath)

    if (!module) {
      return MODULE_NOT_FOUND_RESPONSE
    }

    if (typeof module.default !== "function") {
      console.error(
        "Default export is not a function:",
        module.default
      )
      return INTERNAL_SERVER_ERROR_RESPONSE
    }

    const response = await module
      .default(route.query)
      .catch((e: Error) => {
        console.error("Error calling default export:", e)
        return null
      })

    if (!response) {
      return ERROR_GENERATING_RESPONSE
    }

    return new Response(response, {
      headers: { "Content-Type": "text/html" },
    })
  } catch (e) {
    console.error("Unexpected error:", e)

    return INTERNAL_SERVER_ERROR_RESPONSE
  }
}
