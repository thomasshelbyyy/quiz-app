import { useEffect, useState } from "react"
import Answers from "./Answers"
import Question from "./Question"

const Quiz = ({ question, setCurrentQuestion, setScore, currentQuestion, choosenAnswer, setChoosenAnswer, setGameStarted }) => {
    const [answered, setAnswered] = useState(false)

    const [time, setTime] = useState(10)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000);
        if (time === 0) {
            clearInterval(interval)
            setAnswered(true)
        }
        return () => {
            clearInterval(interval)
        }
    }, [time])

    const handleClick = (correctAnswer) => {
        setAnswered(false)
        setTime(10)
        if (choosenAnswer === correctAnswer) {
            setScore(prev => prev + 1)
        }
        setChoosenAnswer("")
        setCurrentQuestion(prev => prev + 1)
    }

    const handleCancel = () => {
        setGameStarted(false)
        setCurrentQuestion(1)
        setScore(0)
    }

    return (
        <div className="h-screen w-100 flex flex-col justify-center items-center">
            <div className="w-4/5 md:w-3/6 flex justify-between mb-3 px-4">
                <p className="text-xl font-semibold">Question: {currentQuestion} of 15</p>
                <p className="text-2xl font-semibold">{time}</p>
                <button className="px-3 py-1 bg-red-600 text-lg rounded-md" onClick={handleCancel}>Back to main menu</button>
            </div>
            <Question question={question && question.pertanyaan} />
            <Answers answers={question && question.jawaban} setChoosenAnswer={setChoosenAnswer} setAnswered={setAnswered} time={time} />
            {answered && (
                <button className="mt-4 w-4/5 md:w-3/6 bg-green-500 hover:bg-green-600 rounded-lg  py-3 text-lg font-semibold" onClick={() => handleClick(question && question.jawabanBenar)}>NEXT</button>
            )}
        </div>
    )
}

export default Quiz