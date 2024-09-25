import { Fragment } from "components"
import {
  jsxFactory,
  type MarkdownFileProps,
  type StyleObjProps,
} from "utils"

type ComponentProps = {
  markdownItems: MarkdownFileProps[]
  layout: (
    markdownItem: MarkdownFileProps
  ) => StyleObjProps[]
}

type WrappedProps = {
  markdownFile: MarkdownFileProps
  layout: StyleObjProps
}

export function withItems(
  Component: (props: WrappedProps) => JSX.Element
) {
  return function WrappedComponent({
    markdownItems,
    layout,
  }: ComponentProps) {
    return (
      <Fragment>
        {markdownItems.map((markdownItem, index) => (
          <Component
            markdownFile={markdownItem}
            layout={layout(markdownItem)[index]}
          />
        ))}
      </Fragment>
    )
  }
}