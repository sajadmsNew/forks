import { Tag, Center, Logo, Title } from './styles';

export const Header = () => (
  <Tag>
    <Center>
      <Logo>
        <use xlinkHref="#logo" />
      </Logo>
      <Title>
        Tournaments
      </Title>
    </Center>
  </Tag>
);