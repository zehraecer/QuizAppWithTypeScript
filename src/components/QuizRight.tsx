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
    const [correctNumber, setCorrectNumber] = useState<number>(0)

    if (!context) {
        throw new Error("Hata: `MyContext` değeri `undefined` oldu. Bu bileşen yalnızca `MyContext.Provider` içinde kullanılabilir.");
    }
    const { data,
        isCategory, setIsCategory, questionsCategory, setQuestionsCategory,
        questionOrder, setQuestionOrder, clickedOption,
        setClickedOption, isSubmit, setIsSubmit, questionsLength, setQuestionsLength, headerIcon, setHeaderIcon } = context;

    const titleIcon = data.find(e => e.title === headerIcon)
    console.log(titleIcon);


    const CategoryBtns = (title: string) => {
        setHeaderIcon(title)
        setIsCategory(!isCategory)
        if (isCategory) {
            const Questions = quizes.quizzes
            const categoryQuestions = Questions.find(question => question.title === title)
            if (categoryQuestions && categoryQuestions.questions) {
                const z = categoryQuestions.questions;
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
                if (correctNumber <= questionsCategory.length) {
                    setCorrectNumber(correctNumber + 1)
                }

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
    console.log(data);
    console.log(questionsCategory);

    const PlayAgain = () => {
        setIsCategory(!isCategory)
        setQuestionsCategory([])
        setQuestionOrder(0);
        setClickedOption("");
        setIsSubmit(true);
        setQuestionsLength(true);
        setCorrectNumber(0);
        setborder("border");
        setkirmizi("");
        setyesil("");
        setOptionClass("purple");
        setClickedAnswer(true);

    }

    const nextQuestionBtns = () => {
        setQuestionOrder(questionOrder + 1);
        setClickedOption("");
        setIsSubmit(true);
        setClickedAnswer(true);
        setborder("bos");
        setkirmizi("");
        setyesil("");
        setOptionClass("purple");
        if ((questionsCategory.length - 1 === questionOrder)) {
            setQuestionsLength(false)
        }

    }

    useEffect(() => {

    }, [clickedOption, optionClass, correctNumber])

    useEffect(() => {

        // if ((questionsCategory.length - questionOrder === 1)) {
        //     setQuestionsLength(false)
        // }
    }, [questionsLength, isCategory])

    return (

        <>
            <div className="quiz-right">
                {isCategory ?

                    data.map((e: Quiz, index: number) => (
                        <div role="button" key={index} className={`d-flex flex-row gap-3 justify-content-start align-items-center p-3 quiz-right-div ${e.title}`} onClick={() => CategoryBtns(e.title)}>
                            <img src={e.icon} alt="" />
                            <p>{e.title}</p>
                        </div>
                    ))
                    :

                    <div className="">

                        {questionsLength ? (

                            questionsCategory[questionOrder]?.options.map((a: string, index: number) => (

                                <div role="button" onClick={() => clickedOptionBtns(a)} key={index} className={`d-flex flex-row gap-3 justify-content-between align-items-center p-3 quiz-right-div optionsDiv ${clickedOption === a ? border : ""} `}>

                                    <span className={`option-one ${clickedOption === a ? optionClass : ""}`}>
                                        {index === 0 ? <span >A</span> : index === 1 ? <span> B</span> : index === 2 ? <span> C</span> : <span> D</span>}
                                    </span>
                                    <span className={`option-two `}> {a}</span>
                                    <img className="option-img" src={a === questionsCategory[questionOrder]?.answer ? yesil : kirmizi} alt="" />
                                </div>
                            ))

                        )
                            :

                            <div className="d-flex flex-column  justify-content-center align-items-center quiz-right-div quiz-right-div-two">
                                <div className="d-flex justify-content-center align-items-center gap-3">
                                    <img src={titleIcon?.icon} alt="" />
                                    <span>{titleIcon?.title}</span>
                                </div>

                                <p>{correctNumber}</p>
                                <h6>out of {questionsCategory.length}</h6>

                            </div>

                        }

                        {questionsLength ?
                            (
                                isSubmit ? (
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
                                )
                            )
                            :
                            (
                                <div role="button" className="submitAnswer" onClick={PlayAgain}>
                                    <span>
                                        Play Again
                                    </span>
                                </div>
                            )
                        }


                    </div>

                }

            </div >
        </>

    )
}