import styled from 'styled-components';
import { rem } from '@utils//tools';

export const Tag = styled.header`
  background-color: white;
  box-shadow: 0 0 ${rem(5)} 0 rgba(0, 0, 0, .3);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;
`;

export const Center = styled.div`
  align-items: center;
  display: flex;
  height: ${rem(60)};
  justify-content: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.center.maxWidth};
  width: ${props => props.theme.center.width};
  transition: all 150ms ease-in-out;
`;

export const Logo = styled.svg`
  height: ${rem(40)};
  width: ${rem(176)};
`;

export const Title = styled.h1`
  border-left: ${rem(1)} solid ${props => props.theme.fonts.colors.slots[1]};
  display: block;
  font-size: ${rem(18)};
  font-weight: 400;
  letter-spacing: ${rem(-.5)};
  margin-left: ${rem(12)};
  padding: ${rem(2)} ${rem(12)};
`;