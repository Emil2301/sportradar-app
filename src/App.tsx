import React from 'react';
import Match from './pages/simulatedMatches/components/Match/Match';
import GlobalStyles from './styles/Global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Match
        host={{ name: 'Poland', scoredGoals: 2 }}
        guest={{ name: 'Germany', scoredGoals: 3 }}
      />
    </>
  );
}

export default App;
