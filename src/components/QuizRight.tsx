// import { useEffect } from "react"
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext, Quiz, TypeCategory } from "../App";
import quizes from "../data/data.json"

export const QuizRight = () => {
    const context = useContext(MyContext);
    const [border, setborder] = useState<string>("border")
    if (!context) {
        throw new Error("Hata: `MyContext` değeri `undefined` oldu. Bu bileşen yalnızca `MyContext.Provider` içinde kullanılabilir.");
    }
    const { data, setData, clickedTitle, setClickedTitle, isCategory, setIsCategory, questionsCategory, setQuestionsCategory, questionOrder, setQuestionOrder, clickedOption, setClickedOption, isSubmit, setIsSubmit } = context;





    const CategoryBtns = (title: String) => {
        setIsCategory(!isCategory)
        if (isCategory) {
            const Questions = quizes.quizzes
            const categoryQuestions = Questions.find(question => question.title === title)
            if (categoryQuestions && categoryQuestions.questions) {
                const z = categoryQuestions.questions;
                console.log(z[0].options);

                setQuestionsCategory(z);
            }
        }
    }

    useEffect(() => {

    }, [isCategory])

    const clickedOptionBtns = (a: string, b: string) => {
        setClickedOption(a)
        if (a === b) {
            console.log("doğru cevap");
            setborder("green")

        } else {
            console.log("yanlış cevap");
            setborder("kirmizi")
        }
    }

    const submitBtn = () => {
        if (border === "kirmizi" || border === "green") {
            setIsSubmit(false)
            setborder("")
        }
    }

    const nextQuestionBtns = () => {
        setQuestionOrder(questionOrder + 1)
        setIsSubmit(true)

    }

    useEffect(() => {

    }, [clickedOption])

    return (
        <div className="quiz-right">
            {isCategory ?

                data.map((e: Quiz, index: number) => (
                    <div role="button" key={index} className="d-flex flex-row gap-3 justify-content-start align-items-center p-3 quiz-right-div" onClick={() => CategoryBtns(e.title)}>
                        <img src={e.icon} alt="" />
                        <p>{e.title}</p>
                    </div>
                ))
                :
                <div className="">

                    {questionsCategory[questionOrder]?.options.map((a: string, index: number) => (

                        <div role="button" onClick={() => clickedOptionBtns(a, questionsCategory[questionOrder]?.answer)} key={index} className={`d-flex flex-row gap-3 justify-content-start align-items-center p-3 quiz-right-div optionsDiv ${clickedOption === a ? border : ""}`}>

                            <span className="option-one">
                                {index === 0 ? <span>A</span> : index === 1 ? <span> B</span> : index === 2 ? <span> C</span> : <span> D</span>}
                            </span>
                            <span className={`option-two `}> {a}</span>
                        </div>
                    ))
                    }

                    {isSubmit ?

                        <div role="button" onClick={submitBtn} className="submitAnswer">
                            <span >Submit Answer</span>
                        </div>
                        :
                        <div role="button" className="submitAnswer" onClick={nextQuestionBtns}>
                            <span >Next Question</span>
                        </div>
                    }
                </div>

            }


        </div >
    )
}