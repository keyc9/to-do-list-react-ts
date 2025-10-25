import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
// import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"
import { ToDoListContainer, ToDoListItems } from "./ToDoList.styled"


export const ToDoList = (props:{todos:ToDo[], deleteToDo: Function, updateToDo: Function}) => {
    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item) => {
                return (
                    <ToDoListItem toDoItem={item} key={item.id} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
                )
            })
    }

    const uncheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item) => {
                return (
                    <ToDoListItem toDoItem={item} key={item.id} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
                )
            })
    }

    return (
        <ToDoListContainer>
            <ToDoListItems>
                {checkedList()}
            </ToDoListItems>
            <ToDoListItems>
                {uncheckedList()}
            </ToDoListItems>
        </ToDoListContainer>
    )
}