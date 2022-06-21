import Box from './pages/simulatedMatches/components/Box/Box';
import { Container } from './styles/SimulatedMatches.styled';
import GlobalStyles from './styles/Global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Box />
      </Container>
    </>
  );
}

export default App;
