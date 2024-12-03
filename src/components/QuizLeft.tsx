import { useContext } from "react"
import { MyContext } from "../App"

export const QuizLeft = () => {

    const context = useContext(MyContext)

    if (!context) {
        throw new Error("Hata: `MyContext` değeri `undefined` oldu. Bu bileşen yalnızca `MyContext.Provider` içinde kullanılabilir.");
    }
    const { isCategory, questionsCategory, questionOrder, questionsLength } = context

    return (
        <>
            {
                questionsLength ?
                    (
                        isCategory ?
                            <div className="d-flex flex-column quiz-left">

                                < span className="quiz-left-span1" > Welcome to the</span >
                                <span className="quiz-left-span2">Frontend Quiz!</span>
                                <span className="quiz-left-span3">Pick a subject to get started.</span>

                            </div >
                            :

                            <div className="d-flex flex-column">
                                <div className="d-flex flex-column quiz-left">
                                    < span className="quiz-left-span3" >Questions {questionOrder + 1} of {questionsCategory.length}</span >
                                    <span className="quiz-left-span2 quiz-left-span2-quiz">{questionsCategory[questionOrder]?.question} </span>
                                </div>

                            </div >
                    )
                    :
                    (
                        <div className="d-flex flex-column quiz-left">
                            < span className="quiz-left-span1" > Quiz completed</span >
                            <span className="quiz-left-span2">You scored...</span>
                        </div>
                    )
            }



        </>
    )
}