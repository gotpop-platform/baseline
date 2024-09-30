import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  Heading,
  MobileMenuTrigger,
} from "components"
import { jsxFactory, title } from "utils"
import {
  stylesAbout,
  stylesAboutContainer,
} from "variables"

import type { PageProps } from "types"
import { Tag } from "generics"

const aboutPage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={title(slug)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Tag tag="main" styles={stylesAboutContainer}>
          <Tag tag="div" styles={stylesAbout}>
            <Heading>About</Heading>
          </Tag>
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default aboutPage
