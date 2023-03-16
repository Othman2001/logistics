import { NextUIProvider } from "@nextui-org/react"
import theme from "./theme";

interface IUiKitProvider {
  chidlren: React.ReactNode;
}

export default function UiKitProvider({ chidlren }: IUiKitProvider) {
  return (
    <NextUIProvider theme={theme}>
      {chidlren}
    </NextUIProvider>
  )

}
