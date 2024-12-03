import "./style/bootstrap.min.css"
import "./style/bootstrap.bundle.min.js"
import './App.css'
import { QuizWrapper } from './components/QuizWrapper'
import { Header } from "./components/Header.js"
import { createContext, useState } from "react"
import quizzes from "./data/data.json"




export interface State {
  data: Quiz[];
  setData: React.Dispatch<React.SetStateAction<Quiz[]>>;
  clickedTitle: boolean;
  setClickedTitle: React.Dispatch<React.SetStateAction<boolean>>
  isCategory: boolean;
  setIsCategory: React.Dispatch<React.SetStateAction<boolean>>;
  questionsCategory: TypeCategory[]
  setQuestionsCategory: React.Dispatch<React.SetStateAction<TypeCategory[]>>
  questionOrder: number;
  setQuestionOrder: React.Dispatch<React.SetStateAction<number>>
  clickedOption: string;
  setClickedOption: React.Dispatch<React.SetStateAction<string>>
  isSubmit: boolean;
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>
  questionsLength: boolean
  setQuestionsLength: React.Dispatch<React.SetStateAction<boolean>>
  headerIcon: string
  setHeaderIcon: React.Dispatch<React.SetStateAction<string>>

}

export interface Quiz {
  title: string;
  icon: string;
  questions: any[]

}

export interface TypeCategory {

  question: string;
  options: string[];
  answer: string
}

export const MyContext = createContext<State | undefined>(undefined)

function App() {
  const QuizData: Quiz[] = quizzes.quizzes

  const [data, setData] = useState<Quiz[]>(QuizData)
  const [isCategory, setIsCategory] = useState<boolean>(true)
  const [clickedTitle, setClickedTitle] = useState<boolean>(false)
  const [questionsCategory, setQuestionsCategory] = useState<TypeCategory[]>([])
  const [questionOrder, setQuestionOrder] = useState<number>(0)
  const [clickedOption, setClickedOption] = useState<string>("")
  const [isSubmit, setIsSubmit] = useState<boolean>(true)
  const [questionsLength, setQuestionsLength] = useState<boolean>(true)
  const [headerIcon, setHeaderIcon] = useState<string>("")



  return (
    <MyContext.Provider value={{
      data, setData, clickedTitle,
      setClickedTitle, isCategory, setIsCategory, questionsCategory,
      setQuestionsCategory, questionOrder, setQuestionOrder,
      clickedOption, setClickedOption, isSubmit, setIsSubmit, questionsLength,
      setQuestionsLength, headerIcon, setHeaderIcon
    }}>

      <div className="">
        <div>
          <Header />
        </div>
        <div>
          <QuizWrapper />
        </div>
      </div>
    </MyContext.Provider>

  )
}

export default App
