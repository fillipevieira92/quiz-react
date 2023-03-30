import { IQuestion } from "../interfaces";

export function getQuestions(): IQuestion[] {
  return [
    {
      id: 1,
      ask: '1-O que é React?', 
      aswners: [
        {id: 1, text: "a) React é uma biblioteca JavaScript para construção de interfaces de usuário."}, 
        {id: 2, text: "b) React é uma plataforma de desenvolvimento de aplicativos móveis."}, 
        {id: 3, text: "c) React é um sistema de gerenciamento de banco de dados."}, 
        {id: 4, text: "d) React é uma linguagem de programação."}, 
        {id: 5, text: "e) React é uma plataforma de desenvolvimento de jogos."}
      ], 
      correct: {id: 1, text: "a) React é uma biblioteca JavaScript para construção de interfaces de usuário."}, 
      answered: {id: null, text: null}
    },
    {
      id: 2,
      ask: '2-Quais são os principais recursos do React?', 
      aswners: [
        {id: 1, text: "a) React é uma biblioteca que utiliza componentes reutilizáveis para construir interfaces de usuário."}, 
        {id: 2, text: "b) React utiliza uma sintaxe JSX para facilitar a escrita de código."}, 
        {id: 3, text: "c) React tem um alto desempenho, graças ao seu Virtual DOM."}, 
        {id: 4, text: "d) React é uma biblioteca com uma grande comunidade de desenvolvedores e muita documentação."}, 
        {id: 5, text: "e) React é altamente compatível com outras bibliotecas e frameworks de JavaScript."}
      ], 
      correct: {id: 3, text: "c) React tem um alto desempenho, graças ao seu Virtual DOM."}, 
      answered: {id: null, text: null}
    },
    {
      id: 3,
      ask: '3-Quais são as principais diferenças entre o React e o Angular?', 
      aswners: [
        {id: 1, text: "a) React é uma biblioteca, enquanto Angular é um framework completo."}, 
        {id: 2, text: "b) React utiliza o Virtual DOM, enquanto o Angular utiliza o DOM regular."}, 
        {id: 3, text: "c) React utiliza uma sintaxe JSX, enquanto o Angular utiliza um sistema de templates separados."}, 
        {id: 4, text: "d) React é mais leve e fácil de aprender, enquanto o Angular tem uma curva de aprendizado mais íngreme."}, 
        {id: 5, text: "e) React é mais flexível em termos de arquitetura, enquanto o Angular tem uma arquitetura mais prescritiva."}
      ], 
      correct: {id: 1, text: "a) React é uma biblioteca, enquanto Angular é um framework completo."}, 
      answered: {id: null, text: null}
    },
    {
      id: 4,
      ask: '4-Como o React lida com o estado do aplicativo?', 
      aswners: [
        {id: 1, text: "a) O React utiliza o conceito de state para gerenciar o estado do aplicativo."}, 
        {id: 2, text: "b) O estado do aplicativo é armazenado em um objeto chamado de state, que pode ser acessado e modificado pelos componentes."}, 
        {id: 3, text: "c) O estado do aplicativo pode ser passado como props para os componentes filhos."}, 
        {id: 4, text: "d) Quando o estado do aplicativo é atualizado, o React atualiza automaticamente a interface de usuário."}, 
        {id: 5, text: "e) O React utiliza o conceito de imutabilidade para garantir que o estado do aplicativo seja atualizado de forma segura."}
      ], 
      correct: {id: 2, text: "b) O estado do aplicativo é armazenado em um objeto chamado de state, que pode ser acessado e modificado pelos componentes."}, 
      answered: {id: null, text: null}
    },
    {
      id: 5,
      ask: '5-Como o React lida com eventos?', 
      aswners: [
        {id: 1, text: "a) O React utiliza o sistema de eventos nativo do navegador para lidar com eventos."}, 
        {id: 2, text: "b) Os componentes do React podem ser configurados para ouvir eventos específicos."}, 
        {id: 3, text: "c) Quando um evento é acionado, o React chama uma função de callback associada ao evento."}, 
        {id: 4, text: "d) O estado do aplicativo pode ser atualizado em resposta a um evento."}, 
        {id: 5, text: "e) O React tem um sistema de gerenciamento de eventos que garante que os eventos sejam tratados de forma eficiente e sem conflitos."}
      ], 
      correct:  {id: 2, text: "b) Os componentes do React podem ser configurados para ouvir eventos específicos."}, 
      answered: {id: null, text: null}
    }
  ]  
}
