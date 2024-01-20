import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type ButtonProps = { title?: string; content?: string }

export const useName = import.meta.file.split(".").shift()?.toLowerCase()

const Button = ({ title, content }: ButtonProps) => {
  const { css } = useCSS({ meta: import.meta })
  const path = "src/components/Button/ButtonClient.js"

  return (
    <button class={useName}>
      {content}
      <script src={path} type="module"></script>
      <style>{css}</style>
    </button>
  )
}

export default Button