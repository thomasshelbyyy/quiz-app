import { Link } from "react-router-dom"

const MainMenu = ({ setGameStarted }) => {
    const handleGameStarted = () => {
        setGameStarted(true)
    }
    return (
        <div className="w-100 h-screen flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-semibold pb-10">Welcome to the quiz</h1>
            <button
                className="text-2xl w-44 px-4 py-1 font-semibold mb-3 rounded-full bg-red-300 hover:bg-red-400 hover:scale-110 transition duration-200 text-gray-800"
                onClick={handleGameStarted}
            >
                Start
            </button>
            <Link to="/leaderboard" className="text-2xl w-44 px-4 py-1 font-semibold rounded-full bg-green-400 hover:bg-green-500 hover:scale-110 transition duration-200 text-gray-800">Leaderboard</Link>
            {/* <button className="text-2xl w-44 px-4 py-1 font-semibold rounded-full bg-green-400 hover:bg-green-500 hover:scale-110 transition duration-200 text-gray-800">Leaderboard</button> */}
        </div>
    )
}

export default MainMenu