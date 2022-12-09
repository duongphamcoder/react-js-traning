import React from 'react';
import { Children } from 'types';

const ExampleItem: React.FC<Children> = ({ children }) => {
  return <section className="example-item">{children}</section>;
};

export default ExampleItem;
