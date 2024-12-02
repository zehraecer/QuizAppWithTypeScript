import { useContext, useEffect, useState } from "react";
import { MyContext, Quiz } from "../App";
import quizes from "../data/data.json"

export const QuizRight = () => {
    const context = useContext(MyContext);
    const [border, setborder] = useState<string>("border")
    const [yesil, setyesil] = useState<string>("")
    const [kirmizi, setkirmizi] = useState<string>("")
    const [optionClass, setOptionClass] = useState<string>("purple")
    const [clickedAnswer, setClickedAnswer] = useState<boolean>(true)

    if (!context) {
        throw new Error("Hata: `MyContext` değeri `undefined` oldu. Bu bileşen yalnızca `MyContext.Provider` içinde kullanılabilir.");
    }
    const { data,
        isCategory, setIsCategory, questionsCategory, setQuestionsCategory,
        questionOrder, setQuestionOrder, clickedOption,
        setClickedOption, isSubmit, setIsSubmit } = context;


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



    const clickedOptionBtns = (a: string) => {
        setClickedOption(a)

    }

    const submitBtn = () => {
        if (clickedOption) {
            if (clickedOption === questionsCategory[questionOrder]?.answer) {
                setOptionClass("greenBg");
                setborder("green");
                setkirmizi("kirmizi.svg");
                setyesil("yesil.svg");
            } else {
                setOptionClass("redBg");
                setborder("red");
                setkirmizi("kirmizi.svg");
                setyesil("yesil.svg");
            }
            setIsSubmit(false);
            setClickedAnswer(true);
        } else {
            setClickedAnswer(false);
        }
    };

    const nextQuestionBtns = () => {
        setQuestionOrder(questionOrder + 1);
        setClickedOption("");
        setIsSubmit(true);
        setClickedAnswer(true);
        setborder("bos");
        setkirmizi("");
        setyesil("");
        setOptionClass("purple");

    }

    useEffect(() => {

    }, [clickedOption, optionClass])

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

                        <div role="button" onClick={() => clickedOptionBtns(a)} key={index} className={`d-flex flex-row gap-3 justify-content-between align-items-center p-3 quiz-right-div optionsDiv ${clickedOption === a ? border : ""} `}>

                            <span className={`option-one ${clickedOption === a ? optionClass : ""}`}>
                                {index === 0 ? <span >A</span> : index === 1 ? <span> B</span> : index === 2 ? <span> C</span> : <span> D</span>}
                            </span>
                            <span className={`option-two `}> {a}</span>
                            <img className="option-img" src={a === questionsCategory[questionOrder]?.answer ? yesil : kirmizi} alt="" />
                        </div>
                    ))
                    }

                    {isSubmit ? (
                        clickedAnswer ? (
                            <div className="d-flex flex-column submitAnswerBtn">
                                <button
                                    type="submit"
                                    role="button"
                                    onClick={submitBtn}
                                    className="submitAnswer w-100"
                                >
                                    <span>Submit Answer</span>
                                </button>
                            </div>
                        ) : (

                            <div className="d-flex flex-column submitAnswerBtn">
                                <button
                                    type="submit"
                                    role="button"
                                    onClick={submitBtn}
                                    className="submitAnswer w-100"
                                >
                                    <span>Submit Answer</span>
                                </button>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <p>X</p>
                                    <span>Please select an answer</span>
                                </div>
                            </div>
                        )
                    ) : (
                        <div role="button" className="submitAnswer" onClick={nextQuestionBtns}>
                            <span>Next Question</span>
                        </div>
                    )}
                </div>

            }

        </div >
    )
}