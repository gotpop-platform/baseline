import { content } from "./item"

const main = async () => {
  await Bun.write("index.html", content)
}

main()
