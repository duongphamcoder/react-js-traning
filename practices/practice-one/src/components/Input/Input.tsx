import { ChangeEvent, InputHTMLAttributes } from "react";
import "./input.css";

type CustomStyle = {
  [key: string]: string;
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "date" | "checkbox" | "radio" | "submit";
  placeholder?: string;
  name: string;
  customStyle?: CustomStyle;
  onChange?: (event: ChangeEvent) => void;
}

function Input(props: InputProps) {
  const { customStyle } = props;

  return <input className="input" {...props} style={customStyle} />;
}

export default Input;
