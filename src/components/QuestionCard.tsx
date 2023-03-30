import { Card, CardBody, CardHeader, Stack, Text } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import React from 'react';
import { IQuestionCardProps, IQuestionCardState } from '../interfaces';

class QuestionCard extends React.Component<IQuestionCardProps, IQuestionCardState> {
  constructor(props: IQuestionCardProps){
    super(props);
    this.handleSelectChoice = this.handleSelectChoice.bind(this);
    this.state = {
      question: this.props.question,
      selected: false,
      cardBgColor: "purple.700"
    }
  }

  async handleSelectChoice(e: any) {
    let quest = this.state.question;
    quest.answered.text = e.label;
    quest.answered.id = e.value;

    quest.answered.id === quest.correct.id ?
      await this.setState({ cardBgColor: "green.700", question: quest, selected: true }) :
      await this.setState({ cardBgColor: "red.700", question: quest, selected: true })

    this.props.handleSelectChoice(this.state.question);
  }

  render(): React.ReactNode {
    return (
      <>
        <Stack textAlign={'left'}>
          <Card borderRadius={10} bgColor={this.state.cardBgColor} mb={5}>
            <CardHeader borderTopRadius={10} bgColor={'purple.900'}>
              <Text as={'b'}>{this.state.question.ask}</Text>
            </CardHeader>
            <CardBody borderRadius={10}>
              <Select 
                useBasicStyles
                selectedOptionColorScheme="purple"
                focusBorderColor='purple.400'
                key={this.state.question.id}
                placeholder='Selecione apenas uma opção.'
                options={this.state.question.aswners.map(aswner => {
                  return {
                    label: aswner.text,
                    value: aswner.id,
                    variant: "solid",
                  }
                })}
                onChange={this.handleSelectChoice}
                isDisabled={this.state.selected}
              />
            </CardBody>
          </Card>
        </Stack>
      </>      
    );
  }
}

export default QuestionCard;