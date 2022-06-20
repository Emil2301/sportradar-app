import { createSlice, configureStore } from '@reduxjs/toolkit';
import { initialState } from './initialState.data';
import { UpdateMatchAction } from './store.interface';

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    updateMatchScore(
      state,
      { payload: { matchIndex, goalFor } }: UpdateMatchAction
    ) {
      state.matches = state.matches.map((match, i) =>
        matchIndex !== i
          ? match
          : {
              ...match,
              [`${goalFor}`]: {
                ...match[`${goalFor}`],
                scoredGoals: match[`${goalFor}`].scoredGoals + 1,
              },
            }
      );
    },
    resetMatchScores(state, action) {
      state.matches = action.payload;
    },
    updateIsSimulating(state, action) {
      state.isSimulating = action.payload;
    },
    updateButtonState(state, action) {
      state.buttonState = action.payload;
    },
  },
});

export const matchesActions = matchesSlice.actions;

const store = configureStore({ reducer: matchesSlice.reducer });

export default store;
