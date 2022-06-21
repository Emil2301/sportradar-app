import { Game, GameContestant } from '../../../store/store.interface';

export const countTotalGoals = (results: Game[]): number => {
  const sumReducer = (sum: number, val: number) => sum + val;
  const sumOfGoalsScoredByHosts = results
    .map(({ host: { scoredGoals } }) => scoredGoals)
    .reduce(sumReducer, 0);
  const sumOfGoalsScoredByGuests = results
    .map(({ guest: { scoredGoals } }) => scoredGoals)
    .reduce(sumReducer, 0);
  return sumOfGoalsScoredByHosts + sumOfGoalsScoredByGuests;
};

const randomInteger = (max: number): number =>
  Math.floor(Math.random() * (max + 1));

export const simulateGoal = () => ({
  matchIndex: randomInteger(2),
  goalFor: randomInteger(1) ? GameContestant.guest : GameContestant.host,
});
