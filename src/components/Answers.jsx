import { useState } from "react"

const Answers = ({ answers, setAnswered, setChoosenAnswer, time }) => {
    const handleClick = (answer) => {
        if (time !== 0) {
            setAnswered(true)
            setChoosenAnswer(answer)
            setLocalAnswer(answer)
        }
    }
    const [localAnswer, setLocalAnswer] = useState("")

    return (
        <div className="w-3/6 flex flex-col gap-2 text-gray-950 mt-8 cursor-pointer text-lg">
            {answers && answers.map((answer, i) => (
                <button
                    key={i}
                    className={`w-100 rounded-lg p-6 border border-gray-950 hover:bg-blue-950 ${localAnswer === answer ? "bg-blue-900" : "bg-gray-50"} transition duration-200`}
                    onClick={() => handleClick(answer)}
                    disabled={time === 0}
                >
                    {answer}
                </button>
            ))}
        </div>
    )
}

export default Answers