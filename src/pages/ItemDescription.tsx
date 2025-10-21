import { useEffect, useState } from "react"
import { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"

interface ComponentProps {
    todos: ToDo[]
}

export const ItemDescription = ({ todos }: ComponentProps) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setToDo] = useState<ToDo>()

    useEffect(() => {
        
        const searchToDo = todos.find((item) => String(item.id) === id)
        if (searchToDo) {
            setToDo(searchToDo)
        }
        else {
            navigate('/404')
        }
    }, [todos, id, navigate])
    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>

    )
}