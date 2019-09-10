import styled from 'styled-components';
import { rem } from '@utils//tools';

export const Center = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.center.maxWidth};
  width: ${props => props.theme.center.width};
  transition: all 150ms ease-in-out;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Label = styled.label`
  color: ${props => props.theme.fonts.colors.slots[0]};
  font-size: ${props => props.active ? rem(10) : rem(18)};
  font-weight: 700;
  left: ${rem(2)};
  margin: ${props => props.active ? `${rem(-17)} 0 0` : `${rem(-2)} 0 0`};
  position: absolute;
  z-index: 10;
  transition: all 150ms ease-in-out;
`;

export const Input = styled.input`
  border: ${props => props.error ? `${rem(1)} solid red` : `${rem(1)} solid transparent`};
  color: ${props => props.theme.fonts.colors.slots[1]};
  font-size: ${rem(15)};
  font-weight: 400;
  line-height: ${rem(20)};
  margin: ${rem(-18)} ${rem(-10)} ${rem(-14)};
  height: ${rem(50)};
  padding: ${rem(16)} ${rem(11)} ${rem(14)};
  flex: 1 1 auto;
  width: 100%;
  transition: all 150ms ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0 0 ${rem(3)} 0 rgba(0, 0, 0, .3);
    color: ${props => props.theme.fonts.colors.slots[0]};
  }

  &:focus {
    border-color: ${props => props.theme.colors.slots[2]};
  }

  &:focus ~ ${Label} {
    font-size: ${rem(10)};
    margin-top: ${rem(-17)};
  }

  ${props =>
    !props.empty && `
      & ~ ${Label} {
        font-size: ${rem(10)};
        margin-top: ${rem(-17)};
      }
    `
    }
`;

export const Error = styled.span`
  color: ${props => props.theme.colors.slots[3]};
  display: block;
  font-size: ${rem(11)};
  position: absolute;
  left: ${rem(2)};
  bottom: ${rem(-9)};
`;

export const Add = styled.button`
  background-color: ${props => props.theme.colors.slots[4]};
  border: 0 none;
  box-shadow: none;
  cursor: pointer;
  font-size: ${rem(15)};
  font-weight: 700;
  height: ${rem(30)};
  position: absolute;
  text-transform: uppercase;
  right: 0;
  top: 50%;
  margin-top: ${rem(-2)};
  outline: none;
  transform: translateY(-50%);
  width: ${rem(80)};
  z-index: 10;
`;