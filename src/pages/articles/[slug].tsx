import {
  AppTheme,
  Footer,
  GridGap,
  HeaderMegaMenu,
  MobileMenuTrigger,
  TableOfContents,
} from "@gotpop-platform/package-components"
import {
  layoutArticlesSlugContent,
  layoutArticlesSlugSurface,
  layoutArticlesSlugToc,
} from "variables"

import type { PageProps } from "types"
import { SITE_NAME } from "src/constants"
import { Tag } from "generics"
import { jsxFactory } from "@gotpop-platform/package-jsx-factory"
import { parseMarkdownFile } from "@gotpop-platform/package-markdown"
import { title } from "@gotpop-platform/package-utilities"

const pageArticlePage = async ({ slug }: PageProps): Promise<JSX.Element> => {
  const { content, toc, metadata } = parseMarkdownFile("articles", slug)

  return (
    <AppTheme title={title(slug, SITE_NAME)}>
      <GridGap isRoot>
        <MobileMenuTrigger />
        <HeaderMegaMenu />
        <Tag tag="main" styles={layoutArticlesSlugSurface}>
          <Tag tag="aside" styles={layoutArticlesSlugToc}>
            <TableOfContents toc={toc} />
          </Tag>
          <Tag tag="section" styles={layoutArticlesSlugContent(metadata.id)}>
            {content}
          </Tag>
        </Tag>
        <Footer />
      </GridGap>
    </AppTheme>
  )
}

export default pageArticlePage
