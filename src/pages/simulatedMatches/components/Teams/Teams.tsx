import { FC } from 'react';
import { StyledTeams } from '../../../../styles/SimulatedMatches.styled';
import { TeamsProps } from './Teams.interface';

const Teams: FC<TeamsProps> = ({
  firstTeamName,
  secondTeamName,
}: TeamsProps) => {
  return (
    <StyledTeams>
      <p>
        {firstTeamName} vs {secondTeamName}
      </p>
    </StyledTeams>
  );
};

export default Teams;
