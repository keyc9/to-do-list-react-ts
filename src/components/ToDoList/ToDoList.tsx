import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"


export const ToDoList = (props:{todos:ToDo[], deleteToDo: Function, updateToDo: Function}) => {
    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, index) => {
                return (
                    <ToDoListItem toDoItem={item} key={index} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
                )
            })
    }

    const uncheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, index) => {
                return (
                    <ToDoListItem toDoItem={item} key={index} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
                )
            })
    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {checkedList()}
            </ul>
            <ul className="todo-list completed">
                {uncheckedList()}
            </ul>
        </div>
    )
}