import { TListItem } from 'types';

const ListItem: React.FC<TListItem> = (props) => {
  const { children } = props;
  return <li className="todo-item">{children}</li>;
};

export default ListItem;
