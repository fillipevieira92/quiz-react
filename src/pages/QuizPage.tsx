import { IQuestion, IQuizPageProps, IQuizPageState } from '../interfaces';
import { Container, Stack, Spacer, Text } from '@chakra-ui/react';
import SubmitButton from '../components/SubmitButton';
import QuestionCard from '../components/QuestionCard';
import React from 'react';

class QuizPage extends React.Component<IQuizPageProps, IQuizPageState> {

  constructor(props: IQuizPageProps){
    super(props);

    this.state = { 
      questions: this.props.questions,
      isFormValid: false,
      correct: [],
      wrong: []
    };
    this.handleSelectChoice = this.handleSelectChoice.bind(this);
  };

  handleSelectChoice(quest: IQuestion): void {
    const questions:IQuestion[] = this.state.questions.map((question) => {
      if (question.id === quest.id) {
        question.answered = quest.answered;
      }
      return question;
    });
    this.setState({ questions: questions });
    
    this.checkForm();
  }

  checkForm(): void {
    let correct:IQuestion[] = [];
    let wrong:IQuestion[] = [];

    this.state.questions.forEach((question) => {
      if (question.answered.id !== null) {
        question.answered.id === question.correct.id ?
          correct.push(question) :
          wrong.push(question);
      }
    });
    this.setState({ correct: correct, wrong: wrong });

    if (correct.length + wrong.length === this.state.questions.length) {
      this.setState({ isFormValid: true });
    }
  }

  render(): React.ReactNode {
    return (
      <>
        <Container 
          maxW={700} 
          minW={500}
          borderRadius={8}
          bgColor={'whiteAlpha.100'} 
          color={'whiteAlpha.400'} 
          padding={5}
          textAlign={'center'}
          >
          <Stack align={'center'}>
            <img src='quiz.svg' alt='logo' width={100}/>
            <Text fontSize='25px' as={'b'} color={'white'}>Quiz React.js</Text>
            <Spacer /><Spacer /><Spacer />
          </Stack>
          {this.state.questions.map((question) => {
            return (
              <QuestionCard 
                key={question.id}
                question={question}
                handleSelectChoice={this.handleSelectChoice} 
              />
            )
          })}
          <Stack>
            <Spacer />
            <SubmitButton 
              title='Quiz enviado com sucesso!'
              description={
                this.state.correct.length > this.state.wrong.length ?
                  `Parabéns! Você acertou ${this.state.correct.length} de ${this.state.questions.length} questões.` :
                  `Você acertou ${this.state.correct.length} de ${this.state.questions.length} questões, tente novamente.`
              }
              type={this.state.correct.length > this.state.wrong.length ? 'success' : 'error'}
              isDisabled={!this.state.isFormValid}
            />
          </Stack>
        </Container>      
      </>
    )
  }
}

export default QuizPage;