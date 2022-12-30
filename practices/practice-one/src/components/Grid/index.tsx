import { ReactNode } from "react";
import "./grid.css";

type GridProps = {
  col: number;
  gap?: number;
  children?: ReactNode;
};

const Grid = (props: GridProps) => {
  const { col, gap = 20, children } = props;
  const styles = {
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    gap: gap,
  };

  return (
    <section className="grid-layout" style={styles}>
      {children}
    </section>
  );
};

export default Grid;
