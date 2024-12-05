import { QuizLeft } from "./QuizLeft"
import { QuizRight } from "./QuizRight"

export const QuizWrapper = () => {

    return (

        <div className="row quiz-wrapper w-100">
            <div className="col-12 col-md">
                <QuizLeft />
            </div>
            <div className="col-12 col-md">
                <QuizRight />
            </div>
        </div>
    )
}