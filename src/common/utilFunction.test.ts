import { countTotalGoals } from './utilFunctions';

describe('countTotalGoals', () => {
  it('returns number with value 19 after invoking function with 19 goals in state', () => {
    expect(
      countTotalGoals([
        {
          host: {
            name: 'Zambia',
            scoredGoals: 10,
          },
          guest: { name: 'Madagascar', scoredGoals: 2 },
        },
        {
          host: {
            name: 'Uruguay',
            scoredGoals: 3,
          },
          guest: { name: 'Nicaragua', scoredGoals: 4 },
        },
      ])
    ).toBe(19);
  });
});
