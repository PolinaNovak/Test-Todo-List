import styles from "./todo-list.module.css";
import { ToDoItem } from "../../components/ui/todo-item/todo-item";
import { useTodos } from "../../lib/hooks/useTodos";
import { IToDo } from "../../types/todo";

export const ToDoList = () => {
  const { todos, deleteToDo, completeToDo } = useTodos();

  return (
    <div className={styles.root}>
      {todos && todos.length > 0 ? (
        <ul className={styles.toDoList}>
          {todos.map((todo: IToDo) => {
            return (
              <ToDoItem
                key={todo.title}
                title={todo.title}
                status={todo.completed ? "completed" : "incompleted"}
                onDelete={() => deleteToDo(todo.id)}
                onComplete={() =>
                  completeToDo({ ...todo, completed: !todo.completed })
                }
              />
            );
          })}
        </ul>
      ) : (
        <div>Nothing to do</div>
      )}
    </div>
  );
};
