import { ScoreProps } from './Score.interface';
import { StyledScore } from '../../../../styles/SimulatedMatches.styled';
import { FC } from 'react';

const Score: FC<ScoreProps> = ({
  firstTeamGoalsScored,
  secondTeamGoalsScored,
}: ScoreProps) => {
  return (
    <StyledScore>
      <p>
        {firstTeamGoalsScored}:{secondTeamGoalsScored}
      </p>
    </StyledScore>
  );
};

export default Score;
