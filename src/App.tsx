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


  return (
    <MyContext.Provider value={{ data, setData, clickedTitle, setClickedTitle, isCategory, setIsCategory, questionsCategory, setQuestionsCategory }}>

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
