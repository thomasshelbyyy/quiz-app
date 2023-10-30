import { useEffect, useState } from "react"
import MainMenu from "../components/mainMenu"
import Quiz from "../components/Quiz"
import PostGameMenu from "../components/PostGameMenu"
import questions from "../data/questions.json"

const Home = () => {
    const [gameStarted, setGameStarted] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [question, setQuestion] = useState()
    const [score, setScore] = useState(0)
    const [choosenAnswer, setChoosenAnswer] = useState("")

    useEffect(() => {
        const thisLevel = questions.find(question => question.id === currentQuestion)
        setQuestion(thisLevel)
    }, [currentQuestion])
    return (
        <div className="w-screen h-screen bg-gray-800 text-white">
            {!gameStarted && <MainMenu setGameStarted={setGameStarted} />}
            {gameStarted && currentQuestion <= 15 && (
                <Quiz
                    question={question}
                    setCurrentQuestion={setCurrentQuestion}
                    currentQuestion={currentQuestion}
                    setScore={setScore}
                    choosenAnswer={choosenAnswer}
                    setChoosenAnswer={setChoosenAnswer}
                    setGameStarted={setGameStarted}
                />
            )}
            {gameStarted && currentQuestion > 15 && (
                <PostGameMenu
                    score={score}
                    setCurrentQuestion={setCurrentQuestion}
                    setScore={setScore}
                    setGameStarted={setGameStarted}
                />
            )}
        </div>
    )
}

export default Home