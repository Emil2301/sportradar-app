import { useSelector } from 'react-redux';
import { countTotalGoals } from '../../common/utilFunctions';
import { Store } from '../../../../store/store.interface';
import { StyledTotalGoals } from '../../../../styles/SimulatedMatches.styled';
import { FC } from 'react';

const TotalGoals: FC = () => {
  const results = useSelector((state: Store) => state.matches);
  return (
    <StyledTotalGoals>Total goals: {countTotalGoals(results)}</StyledTotalGoals>
  );
};

export default TotalGoals;
