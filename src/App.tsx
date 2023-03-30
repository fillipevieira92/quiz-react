import { ChakraProvider, extendTheme, type ThemeConfig } from '@chakra-ui/react';
import QuizPage from './pages/QuizPage';

function App() {
  const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }

  const theme = extendTheme({ config })
  return (
    <ChakraProvider theme={theme}>
      <QuizPage />      
    </ChakraProvider>
  );
}

export default App;
