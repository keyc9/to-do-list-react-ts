import { useState } from "react"
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"

export const ToDoListPage = () => {

    const [todos, setToDos] = useState<ToDo[]>([])

    const createNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false,
        }

        setToDos([...todos, newToDo])
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newToDos = todos.map((item) => {
            if (item.id === toDoItem.id) {
                item.isDone = !item.isDone
            }
            return item
        })
        setToDos(newToDos)
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newToDos = todos.filter((item) => item.id !== toDoItem.id)
        setToDos(newToDos)
    }

    return (
        <>
            <Header />
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}