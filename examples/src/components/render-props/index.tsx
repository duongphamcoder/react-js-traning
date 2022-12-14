import { FunctionComponent, MouseEvent, ReactNode, useState } from 'react';

const RenderProps: FunctionComponent = () => {
  const [index, setIndex] = useState({ x: 0, y: 0 });
  const style = {
    height: '150px',
    backgroundColor: 'green',
    color: 'white',
    padding: '20px 30px',
  };

  const handleGetValue = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    setIndex({
      x,
      y,
    });
  };
  return (
    <>
      <section style={style} onMouseMove={handleGetValue}>
        <ShowIndexMouse index={index} />
      </section>
      <FunctionChildren
        children={(index: { x: number | string; y: number | string }) => (
          <p>
            The index position is {index.x}, {index.y}
          </p>
        )}
      />
    </>
  );
};

type ShowIndexMouseProps = {
  index: {
    x: number | string;
    y: number | string;
  };
};

const ShowIndexMouse: FunctionComponent<ShowIndexMouseProps> = (props) => {
  const { index, ...rest } = props;
  return (
    <p>
      Current index (x = {index.x} ) (y = {index.y} )
    </p>
  );
};

const FunctionChildren: FunctionComponent<{
  children: any;
}> = (props) => {
  return <>{props.children({ x: 20, y: 30 })}</>;
};

export default RenderProps;
