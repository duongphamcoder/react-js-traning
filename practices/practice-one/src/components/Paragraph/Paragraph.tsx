import { ReactNode } from "react";

type ParagraphProps = {
  children?: ReactNode;
  content?: string;
};

function Paragraph(props: ParagraphProps) {
  const { children, content } = props;
  return <p className="paragraph">{children || content}</p>;
}

export default Paragraph;
