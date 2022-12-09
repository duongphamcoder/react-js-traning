import { TLists } from 'types';
import ListItem from './ListItem';

const Lists: React.FC<TLists> = (props) => {
  const { list, tagName = 'ul', ...rest } = props;
  const TagName = tagName;
  return (
    <TagName className="todos" {...rest}>
      {list.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </TagName>
  );
};

export default Lists;
