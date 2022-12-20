import "./heading.css";

interface HeadingProps {
  title: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
function Heading(props: HeadingProps) {
  const { title, tag = "h2" } = props;
  const TagName = tag;
  return <TagName className="heading">{title}</TagName>;
}

export default Heading;
