import { QuizLeft } from "./QuizLeft"
import { QuizRight } from "./QuizRight"

export const QuizWrapper = () => {

    return (

        <div className="row quiz-wrapper w-100">
            <div className="col">
                <QuizLeft />
            </div>
            <div className="col">
                <QuizRight />
            </div>
        </div>
    )
}