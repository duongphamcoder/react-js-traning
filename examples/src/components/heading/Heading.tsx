import { THeading } from 'types';

const Heading: React.FC<THeading> = (props) => {
  const {
    title = 'Please fill in the title',
    tagName = 'h2',
    children,
    ...rest
  } = props;
  const TagName = tagName;
  return <TagName {...rest}>{children || title}</TagName>;
};

export default Heading;
