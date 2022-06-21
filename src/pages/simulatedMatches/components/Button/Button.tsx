import { StyledButton } from '../../../../styles/SimulatedMatches.styled';
import { useDispatch, useSelector } from 'react-redux';
import { matchesActions } from '../../../../store/index';
import { ButtonState, Store } from '../../../../store/store.interface';
import { countTotalGoals, simulateGoal } from '../../common/utilFunctions';
import { initialState } from '../../../../store/initialState.data';
import { FC } from 'react';

const Button: FC = () => {
  const dispatch = useDispatch();
  const results = useSelector((state: Store) => state.matches);
  const buttonState = useSelector((state: Store) => state.buttonState);

  const handleButtonClick = () => {
    switch (buttonState) {
      case ButtonState.start:
        dispatch(matchesActions.updateIsSimulating(true));
        dispatch(matchesActions.updateButtonState(ButtonState.finish));
        return;
      case ButtonState.finish:
        for (let i = 1; i <= 9 - countTotalGoals(results); i++) {
          dispatch(matchesActions.updateMatchScore(simulateGoal()));
        }
        dispatch(matchesActions.updateButtonState(ButtonState.restart));
        dispatch(matchesActions.updateIsSimulating(false));
        return;
      case ButtonState.restart:
        dispatch(matchesActions.resetMatchScores(initialState.matches));
        dispatch(matchesActions.updateIsSimulating(true));
        dispatch(matchesActions.updateButtonState(ButtonState.finish));
        return;
      default:
        return;
    }
  };
  return <StyledButton onClick={handleButtonClick}>{buttonState}</StyledButton>;
};

export default Button;
