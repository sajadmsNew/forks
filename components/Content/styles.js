import styled from 'styled-components';
import { rem } from '@utils//tools';

export const Tag = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: ${rem(80)} 0 ${rem(20)};
`;

export const Center = styled.div`
  display: block;
  margin: 0 auto;
  max-width: ${props => props.theme.center.maxWidth};
  width: ${props => props.theme.center.width};
  transition: all 150ms ease-in-out;
`;