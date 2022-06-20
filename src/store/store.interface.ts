export interface Store {
  matches: Game[];
  isSimulating: boolean;
  buttonState: ButtonState;
}

export enum ButtonState {
  start = 'Start',
  restart = 'Restart',
  finish = 'Finish',
}

export interface UpdateMatchAction {
  type: string;
  payload: UpdateMatchActionPayload;
}

export interface UpdateMatchActionPayload {
  matchIndex: number;
  goalFor: GameContestant;
}

export enum GameContestant {
  host = 'host',
  guest = 'guest',
}

export interface ContestantDetails {
  name: string;
  scoredGoals: number;
}

export interface Game {
  host: ContestantDetails;
  guest: ContestantDetails;
}
