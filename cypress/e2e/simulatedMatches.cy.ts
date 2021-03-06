/// <reference types="cypress" />
const TIME_TO_SCORE_ONE_GOAL_IN_MS = 10000;

describe('simulated Matches app', () => {
  beforeEach(() => {
    cy.clock();
    cy.visit('/');
    cy.contains('Poland');
    cy.contains('Germany');
    cy.contains('Brazil');
    cy.contains('Mexico');
    cy.contains('Argentina');
    cy.contains('Uruguay');
    cy.contains('Start').click();
  });

  it('shows "Start" button, after clicking it and waiting 90 seconds, it shows total goals of 9 and button with text "Restart"', () => {
    cy.contains('Total goals: 0');
    cy.tick(9 * TIME_TO_SCORE_ONE_GOAL_IN_MS);
    cy.contains('Total goals: 9');
    cy.contains('Restart').click();
    cy.contains('Finish');
  });

  it('shows "Start" button, after clicking it simulation starts, after clicking "Finish" before simulation ends, it shows total goals of 9 immediately', () => {
    cy.contains('Finish').click();
    cy.contains('Total goals: 9');
  });

  it('shows "Start" button, after clicking it simulation starts, after 30 seconds, total goals indicates 3', () => {
    cy.tick(3 * TIME_TO_SCORE_ONE_GOAL_IN_MS);
    cy.contains('Total goals: 3');
  });

  it('shows "Start" button, after clicking it simulation starts, after 10 seconds, one of teams has one goal scored', () => {
    cy.tick(TIME_TO_SCORE_ONE_GOAL_IN_MS);
    cy.contains('p', 1);
  });
});
