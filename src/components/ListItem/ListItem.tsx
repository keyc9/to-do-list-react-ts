import { ToDo } from "../../models/todo-item"
// import classes from './ListItem.module.scss'
import { ListItemStyled } from "./ListItem.styled"

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <ListItemStyled
      target="_blank"
      rel="noreferrer"
      href={`/list/${todo.id}`}
      className={todo.isDone ? 'done' : 'notDone'}
    >
      {todo.text}
    </ListItemStyled>
  );
};