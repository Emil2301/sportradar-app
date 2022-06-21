import { StyledBox } from '../../../../styles/SimulatedMatches.styled';
import Button from '../Button/Button';
import Match from '../Match/Match';
import TotalGoals from '../TotalGoals/TotalGoals';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Game, Store } from '../../../../store/store.interface';
import useSimulation from '../../hooks/useSimulation';

const Box: FC = () => {
  const results = useSelector((state: Store) => state.matches);
  useSimulation();

  const resultJSX = results.map(({ host, guest }: Game, index) => (
    <Match host={host} guest={guest} key={index} />
  ));

  return (
    <StyledBox>
      <Button />
      {resultJSX}
      <TotalGoals />
    </StyledBox>
  );
};

export default Box;
