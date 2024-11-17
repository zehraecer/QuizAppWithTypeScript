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
}

export interface Quiz {

  title: string;
  icon: string;
  questions: any[]

}

export const MyContext = createContext<State | undefined>(undefined)

function App() {
  const QuizData: Quiz[] = quizzes.quizzes

  const [data, setData] = useState<Quiz[]>(QuizData)
  const [clickedTitle, setClickedTitle] = useState<boolean>(false)


  return (
    <MyContext.Provider value={{ data, setData, clickedTitle, setClickedTitle }}>

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
