import { ToDo } from "../../models/todo-item"
import classes from './ListItem.module.scss'

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <a 
        target="_blank"
        href={`/app/list/${todo.id}`} 
        className={`${classes.link} ${todo.isDone? classes.done : classes.notDone}`}
        >{todo.text}</a>
    )
}