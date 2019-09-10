import styled from 'styled-components';
import { rem } from '@utils/tools';
import { TournamentsEffect } from './animations';

export const Tournaments = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 ${rem(-5)};
`;

export const Tag = styled.li`
  flex: 1 1 ${rem(350)};
  margin: ${rem(5)};
  max-width: ${rem(370)};
  width: 100%;
  animation: ${TournamentsEffect} 500ms ease-in-out;
`;

export const Title = styled.h2`
  color: ${props => props.theme.fonts.colors.slots[0]};
  display: block;
  font-size: ${rem(16)};
  font-weight: 700;
  margin-bottom: ${rem(1)};
`;

export const Date = styled.span`
  color: ${props => props.theme.fonts.colors.slots[1]};
  font-size: ${rem(11)};
  font-weight: 400;
`;

export const Filter = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: ${rem(-14)};
  max-height: ${rem(320)};
  overflow: auto;
`;

export const Item = styled.li`
  border-bottom: ${rem(1)} solid ${props => props.theme.colors.slots[1]};
  margin: 0 ${rem(-10)};
  padding: ${rem(10)};
`;

export const Time = styled.span`
  color: ${props => props.theme.fonts.colors.slots[1]};
  display: block;
  font-size: ${rem(10)};
  margin-bottom: ${rem(7)};
`;

export const Team = styled.div`
  align-items: center;
  border-radius: ${rem(2)} 0 0 ${rem(2)};
  border-left: ${rem(3)} solid ${props => props.status == 1 ? props.theme.colors.slots[2] : props.theme.colors.slots[3]};
  display: flex;
  margin-bottom: ${rem(10)};
  padding-left: ${rem(5)};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Name = styled.span`
  flex: 1 1 auto;
  font-size: ${rem(12)};
  font-weight: 400;
`;

export const Score = styled.span`
  flex: 0 0 auto;
  font-weight: ${props => props.status == 1 ? '700' : '400'};
`;