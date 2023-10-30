import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Leaderboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("leaderboard")))
    }, [])

    const handleDelete = name => {
        if (confirm("are you sure?")) {
            const newData = data.length > 0 && data.filter(dat => dat.name !== name)
            localStorage.setItem("leaderboard", JSON.stringify(newData))
            setData(newData)
        } else {
            alert("Failed to delete data")
        }
    }

    return (
        <div className="h-screen w-screen bg-gray-800 text-white flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold">Leaderboard</h1>
            <Link to="/" className="text-xl px-4 py-2 my-2 rounded-full bg-green-500 hover:bg-green-600 transition duration-200 font-semibold">Back to home</Link>
            {data.length > 0 ? (
                <ul className="w-4/5 md:w-3/6 text-gray-800">
                    {data.map(dat => (
                        <li key={dat.name} className="w-100 px-3 py-2 text-lg flex justify-between mb-1 bg-slate-300 rounded-lg border border-blue-900 group">
                            <div>{dat.name}</div>
                            <div>{dat.score} <button className="opacity-0 group-hover:opacity-100 text-sm rounded-lg bg-red-600 text-white px-2 py-1 ml-2" onClick={() => handleDelete(dat.name)}>delete</button></div>
                        </li>
                    ))}
                </ul>

            ) : (
                <h2 className="text-xl font-semibold">Oops... looks like you haven't play yet</h2>
            )}
        </div>
    )
}

export default Leaderboard