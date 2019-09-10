import { Card } from '@components/Card';
import { useStateValue } from '@states/tournaments';
import { Tournaments, Tag, Title, Date, Filter, List, Item, Time, Team, Name, Score } from './styles';

export const Tournament = props => {
  const [{ tournaments }] = useStateValue();

  return (
    <Tournaments>
      { tournaments.map((tournament, i) => (
        <Tag key={i}>
          <Card hasBorder={true} key={i}>
            <Title>
              { tournament.title }
            </Title>
            <Date>
              { tournament.date }
            </Date>
          </Card>
          <Card>
            <Filter>
            </Filter>
            <List>
              { tournament.results.map((item, key) => (
                <Item key={key}>
                  <Time>{item.time}</Time>
                  { item.teams.map((team, index) => (
                    <Team status={team.status} key={index}>
                      <Name>{team.name}</Name>
                      <Score status={team.status}>{team.score}</Score>
                    </Team>
                  ))}
                </Item>
              ))}
            </List>
          </Card>
        </Tag>
      ))}
    </Tournaments>
  )
}