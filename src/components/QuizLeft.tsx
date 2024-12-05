import { useContext, useEffect, useRef } from "react"
import { MyContext } from "../App"

export const QuizLeft = () => {

    const context = useContext(MyContext)

    if (!context) {
        throw new Error("Hata: `MyContext` değeri `undefined` oldu. Bu bileşen yalnızca `MyContext.Provider` içinde kullanılabilir.");
    }
    const { isCategory, questionsCategory, questionOrder, questionsLength } = context
    const rangeInputRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        if (rangeInputRef.current) {
            const progressPercentage = ((questionOrder + 1) / questionsCategory.length) * 100;
            rangeInputRef.current.style.background = `linear-gradient(to right, #A729F5 ${progressPercentage}%, white ${progressPercentage}%)`;
        }
    }, [questionOrder, questionsCategory.length]);


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

                            <div className="d-flex flex-column justify-content-between quiz-left-div">
                                <div className="d-flex flex-column quiz-left" style={{ flexGrow: 2, overflow: "auto" }}>
                                    <span className="quiz-left-span3">
                                        Questions {questionOrder + 1} of {questionsCategory.length}
                                    </span>
                                    <span className="quiz-left-span2 quiz-left-span2-quiz">
                                        {questionsCategory[questionOrder]?.question}
                                    </span>
                                </div>
                                <div className="radioDiv" style={{ position: "absolute", bottom: "0", width: "100%" }}>
                                    <input
                                        ref={rangeInputRef}
                                        type="range"
                                        id="volume"
                                        name="volume"
                                        min="1"
                                        max={questionsCategory.length}
                                        value={questionOrder + 1}
                                        readOnly
                                    />
                                </div>
                            </div>

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