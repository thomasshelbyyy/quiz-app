import { useEffect, useState } from "react"

const PostGameMenu = ({ score, setCurrentQuestion, setScore, setGameStarted }) => {

    const [name, setName] = useState("")

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("leaderboard"))
        if (!storedData) {
            localStorage.setItem("leaderboard", JSON.stringify([]))
        }
    }, [])

    const handleTryAgain = () => {
        setCurrentQuestion(1)
        setScore(0)
    }

    const handleFinish = () => {
        const data = { name, score }
        const storedData = JSON.parse(localStorage.getItem("leaderboard"))
        if (!storedData) {
            localStorage.setItem("leaderboard", JSON.stringify([data]))
        } else {
            const findUser = storedData.find(scoreData => scoreData.name === data.name)
            if (findUser) {
                alert("please enter another name")
            } else {
                const fixData = [...storedData, data]
                localStorage.setItem("leaderboard", JSON.stringify(fixData))
                setGameStarted(false)
                setCurrentQuestion(1)
                setScore(0)
            }
        }
    }

    return (
        <div className="w-100 h-screen flex flex-col justify-center items-center">
            <h1>Your score is {score}</h1>
            <input type="text" required onChange={(e) => setName(e.target.value)} className="w-80 text-xl placeholder:text-xl p-3 text-black rounded-lg mb-5" placeholder="enter your name" />
            <button
                className="text-xl rounded-full w-48 py-2 mb-2 bg-green-500"
                onClick={handleTryAgain}
            >
                Try Again
            </button>
            <button
                className="text-xl rounded-full w-48 py-2 mb-2 bg-sky-700"
                onClick={handleFinish}
            >
                Finish
            </button>
        </div>
    )
}

export default PostGameMenu