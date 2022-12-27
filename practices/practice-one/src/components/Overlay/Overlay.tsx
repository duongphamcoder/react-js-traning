import { MouseEvent, ReactNode } from "react";
import "./overlay.css";

type OverlayProps = {
  children?: ReactNode;
  onClick?: (event: MouseEvent) => void;
};

function Overlay(props: OverlayProps) {
  return <section className="overlay" {...props} />;
}
export default Overlay;
