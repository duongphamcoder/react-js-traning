import { ReactNode, MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import "./button.css";

type ClickEvent = (event: MouseEvent) => void;

interface ButtonProps {
  type?: "button" | "submit";
  title?: string;
  tag?: "button" | "a";
  path?: string;
  variant?: "primary" | "secondary" | "default";
  size?: "sm" | "md" | "lg";
  borderRadius?: "5px" | "10px" | "15px" | "25px" | "50%";
  disabled: boolean;
  children?: ReactNode;
  onClick?: ClickEvent;
}

const buttonSize = {
  sm: "small",
  md: "medium",
  lg: "large",
};

function Button(props: ButtonProps) {
  const {
    title,
    tag = "button",
    size = "sm",
    variant = "default",
    path = "",
    children,
    ...rest
  } = props;
  const TagName = tag === "a" ? NavLink : tag;
  const className = `btn btn-${variant} btn-${buttonSize[size]}`;

  return (
    <TagName className={className} to={path} {...rest} disabled={props.disabled}>
      {children || title}
    </TagName>
  );
}

export default Button;
