import { TitleContainer } from "./title.styles";
import type { TitleVariant } from "./title.styles";


interface TitleProps {
  variant?: TitleVariant;
  children: React.ReactNode;
}

export function Title({ variant = "medium", children }: TitleProps) {
  return <TitleContainer variant={variant}>{children}</TitleContainer>;
}
