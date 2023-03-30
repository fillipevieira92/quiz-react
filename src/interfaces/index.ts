export interface IQuizPageState {
  questions: IQuestion[]
  isFormValid: boolean,
  correct: IQuestion[],
  wrong: IQuestion[]
}

export interface IQuestionCardProps {
  question: IQuestion
  handleSelectChoice: Function  
}

export interface IQuestionCardState {
  question: IQuestion
  selected: boolean,
  cardBgColor: "purple.700" | "red.700" | "green.700"
}

export interface IQuestion {
  id: number
  ask: string
  aswners: IAswner[]
  correct: IAswner
  answered: IAswner
}

export interface IAswner {
  id: number|null
  text: string|null
}

export interface ISubmitButtonProps {
  title: string
  description: string
  type: "info" | "warning" | "success" | "error" | "loading" | undefined
  isDisabled: boolean
}