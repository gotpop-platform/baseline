import { jsxFactory, useCSS } from "utils"

import { HeaderSurface } from "./HeaderSurface"
import { LogoMegaMenu } from "./LogoMegaMenu"
import { MegaNav } from "./MegaNav"
import { mkClass } from "utils"

type HeaderMegaMenuProps = {
  title?: string
  children?: string
}

export const HeaderMegaMenu = ({
  title,
  children,
}: HeaderMegaMenuProps) => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <header
      id="headerMegaMenu"
      popover="auto"
      class={mkClass(import.meta.file)}
    >
      <style>{css}</style>
      <HeaderSurface>
        <LogoMegaMenu />
        <MegaNav />
      </HeaderSurface>
    </header>
  )
}
