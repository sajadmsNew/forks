import { Tag } from './styles';

export const Card = props => {
  const { children, hasBorder } = props;

  return (
    <Tag hasBorder={hasBorder}>
      { children }
    </Tag>
  );
}