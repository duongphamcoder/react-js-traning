import { ReactNode, MouseEvent } from "react";
import "./button.css";
type ClickEvent = (event: MouseEvent) => void;

interface ButtonProps {
  type?: "button" | "submit";
  title?: string;
  tag?: "button" | "a";
  variant?: "primary" | "secondary" | "default";
  size?: "sm" | "md" | "lg";
  borderRadius?: "5px" | "10px" | "15px" | "25px" | "50%";
  children?: ReactNode;
  onClick?: ClickEvent;
}

const buttonStize = {
  sm: "small",
  md: "medium",
  lg: "large",
};

function Button(props: ButtonProps) {
  const { title, tag = "button", size = "sm", variant = "default", children, ...rest } = props;
  const TagName = tag;
  const className = `btn btn-${variant} btn-${buttonStize[size]}`;
  return (
    <TagName className={className} {...rest}>
      {children || title}
    </TagName>
  );
}

export default Button;
