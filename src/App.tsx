import { ChakraProvider, extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { getQuestions } from './helpers/questions';
import QuizPage from './pages/QuizPage';

function App() {
  const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  };

  const questions = getQuestions();

  const theme = extendTheme({ config });
  return (
    <ChakraProvider theme={theme}>
      <QuizPage questions={questions} />
    </ChakraProvider>
  );
}

export default App;
