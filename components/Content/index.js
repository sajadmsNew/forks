import { Tag, Center } from './styles';

export const Content = props => {
  const { children } = props;

  return (
    <Tag>
      <Center>
        { children }
      </Center>
    </Tag>
  );
}
  