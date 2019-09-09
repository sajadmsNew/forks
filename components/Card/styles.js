import styled from 'styled-components';
import { rem } from '@utils//tools';

export const Tag = styled.div`
  background-color: white;
  border-top: ${rem(4)} solid ${props => props.hasBorder ? props.theme.colors.slots[0] : 'transparent'};
  box-shadow: 0 ${rem(2)} ${rem(4)} rgba(0,0,0,.1);
  margin-bottom: ${rem(10)};
  padding: ${rem(14)} ${rem(10)};
  width: 100%;
`;