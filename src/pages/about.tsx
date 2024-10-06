import { AppTheme, Footer, GridGap, HeaderMegaMenu, Heading, MobileMenuTrigger } from "components"
import { stylesAbout, stylesAboutContainer } from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "utils"
import { title } from "@gotpop-platform/utils"

const aboutPage = async ({ slug }: PageProps): Promise<JSX.Element> => {
  return (
    <AppTheme title={title(slug, SITE_NAME)}>
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
