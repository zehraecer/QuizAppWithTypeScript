import { useContext } from "react"
import { MyContext } from "../App"

export const QuizLeft = () => {

    const context = useContext(MyContext)

    if (!context) {
        throw new Error("Hata: `MyContext` değeri `undefined` oldu. Bu bileşen yalnızca `MyContext.Provider` içinde kullanılabilir.");
    }
    const { isCategory, setIsCategory, questionsCategory, setQuestionsCategory, questionOrder, setQuestionOrder, } = context

    return (
        <>
            {
                isCategory ?
                    <div className="d-flex flex-column quiz-left">

                        < span className="quiz-left-span1" > Welcome to the</span >
                        <span className="quiz-left-span2"></span>
                        <span className="quiz-left-span3">Pick a subject to get started.</span>

                    </div >
                    :

                    <div className="d-flex flex-column quiz-left">

                        < span className="quiz-left-span1" ></span >
                        <span className="quiz-left-span2">{questionsCategory[questionOrder]?.question} </span>
                        <span className="quiz-left-span3">Pick a subject to get started.</span>

                    </div >
            }

        </>
    )
}