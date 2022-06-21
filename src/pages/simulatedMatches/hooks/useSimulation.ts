import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matchesActions } from '../../../store';
import { ButtonState, Store } from '../../../store/store.interface';
import { simulateGoal } from '../common/utilFunctions';

const useSimulation = () => {
  const TIME_TO_SCORE_ONE_GOAL_IN_MS = 10000;
  const dispatch = useDispatch();
  const isSimulating = useSelector((state: Store) => state.isSimulating);

  useEffect(() => {
    if (isSimulating) {
      let counter = 0;
      const simulateMatchesIntervalId = setInterval(() => {
        dispatch(matchesActions.updateMatchScore(simulateGoal()));
        counter++;
        if (counter === 9) {
          dispatch(matchesActions.updateButtonState(ButtonState.restart));
          clearInterval(simulateMatchesIntervalId);
          dispatch(matchesActions.updateIsSimulating(false));
        }
      }, TIME_TO_SCORE_ONE_GOAL_IN_MS);

      return () => {
        clearInterval(simulateMatchesIntervalId);
        dispatch(matchesActions.updateIsSimulating(false));
        dispatch(matchesActions.updateButtonState(ButtonState.restart));
      };
    }
  }, [isSimulating, dispatch]);
};

export default useSimulation;
