import Score from '../Score/Score';
import { StyledMatch } from '../../../../styles/SimulatedMatches.styled';
import Teams from '../Teams/Teams';
import { FC } from 'react';
import { Game } from '../../../../store/store.interface';

const Match: FC<Game> = ({ host, guest }: Game) => {
  return (
    <StyledMatch className="match">
      <Teams firstTeamName={host.name} secondTeamName={guest.name} />
      <Score
        firstTeamGoalsScored={host.scoredGoals}
        secondTeamGoalsScored={guest.scoredGoals}
      />
    </StyledMatch>
  );
};

export default Match;
