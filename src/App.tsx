import React from 'react';
import Score from './pages/simulatedMatches/components/Score/Score';
import Teams from './pages/simulatedMatches/components/Teams/Teams';
import GlobalStyles from './styles/Global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Score firstTeamGoalsScored={1} secondTeamGoalsScored={2} />
      <Teams firstTeamName="Poland" secondTeamName="Germany" />
    </>
  );
}

export default App;
