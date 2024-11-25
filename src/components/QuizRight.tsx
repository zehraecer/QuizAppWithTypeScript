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
        console.log(isCategory);

    }, [isCategory])

    return (
        <div className="quiz-right ">
            {isCategory ?
                data.map((e: Quiz, index: number) => (
                    <div key={index} className="d-flex flex-row gap-3 justify-content-start align-items-center p-3 quiz-right-div" onClick={() => CategoryBtns(e.title)}>
                        <img src={e.icon} alt="" />
                        <span>{e.title}</span>
                    </div>
                ))
                :

                questionsCategory[0]?.options.map((a: String, index: number) => (

                    <div key={index} className="d-flex flex-row gap-3 justify-content-start align-items-center p-3 quiz-right-div" >

                        <span>
                            <span>{index === 0 ? <span>A</span> : index === 1 ? <span> B</span> : index === 2 ? <span> C</span> : <span> D</span>

                            }</span>
                            {a}
                        </span>
                    </div>
                ))

            }
        </div >
    )
}