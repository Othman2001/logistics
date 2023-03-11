import UiKitProvider from "./theme/UiKitProvider";

/* eslint-disable-next-line */
export interface UiKitProps {
  children: React.ReactNode
}



export function UiKit({ children }: UiKitProps) {
  return (
    <UiKitProvider
      chidlren={children}
    />
  );
}

export default UiKit;
