// import { useEffect } from "react"
import { useContext, useState } from "react";
import { MyContext, Quiz } from "../App";
import quizes from "../data/data.json"

export const QuizRight = () => {

    const { data, setData } = useContext(MyContext)

    console.log(data);

    const deneme = (title: Quiz) => {
        console.log(title);
        const s = quizes.quizzes
        console.log(s.find(c => c.title === title));




    }

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