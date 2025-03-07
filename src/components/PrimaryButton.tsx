import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type CustomButtonProps = ButtonProps & {
  children: ReactNode;
  fontSize?: "sm" | "md" | "lg"; // 使いやすいように Chakra UI のサイズに限定
};

export const PrimaryButton = ({
  children,
  fontSize = "lg",
  colorPalette = "cyan",
  ...props
}: CustomButtonProps) => {
  return (
    <Button fontSize={fontSize} colorPalette={colorPalette} {...props}>
      {children}
    </Button>
  );
};
