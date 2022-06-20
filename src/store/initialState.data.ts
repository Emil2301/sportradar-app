export const initialState = {
  matches: [
    {
      host: {
        name: 'Germany',
        scoredGoals: 0,
      },
      guest: { name: 'Poland', scoredGoals: 0 },
    },
    {
      host: {
        name: 'Brazil',
        scoredGoals: 0,
      },
      guest: { name: 'Mexico', scoredGoals: 0 },
    },
    {
      host: {
        name: 'Argentina',
        scoredGoals: 0,
      },
      guest: { name: 'Uruguay', scoredGoals: 0 },
    },
  ],
  isSimulating: false,
  buttonState: 'Start',
};
