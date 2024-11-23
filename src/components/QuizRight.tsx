// import { useEffect } from "react"
import { useContext, useEffect, useState } from "react";
import { MyContext, Quiz, TypeCategory } from "../App";
import quizes from "../data/data.json"

export const QuizRight = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("Hata: `MyContext` değeri `undefined` oldu. Bu bileşen yalnızca `MyContext.Provider` içinde kullanılabilir.");
    }
    const { data, setData, clickedTitle, setClickedTitle, isCategory, setIsCategory, questionsCategory, setQuestionsCategory } = context;


    const deneme = (title: String) => {

        setIsCategory(!isCategory)
        if (isCategory) {
            const Questions = quizes.quizzes
            const categoryQuestions = Questions.find(question => question.title === title)
            if (categoryQuestions && categoryQuestions.questions) {
                const z = categoryQuestions.questions;
                console.log(z);

                setQuestionsCategory(z);
            }
        }
    }

    console.log(questionsCategory);


    useEffect(() => {


    }, [isCategory])

    return (
        <div className="quiz-right ">
            {data.map((e: Quiz) => (
                <div className="d-flex flex-row gap-3 justify-content-start align-items-center p-3 quiz-right-div" onClick={() => deneme(e.title)}>
                    <img src={e.icon} alt="" />
                    <span>{e.title}</span>
                </div>
            ))
            }
        </div>
    )
}