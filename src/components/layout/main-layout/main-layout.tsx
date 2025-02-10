import { Loading } from "../../../lib/utils/loader";
import { useTodos } from "../../../lib/hooks/useTodos";
import { ToDoInput } from "../../ui/todo-input/todo-input";
import styles from "./main-layout.module.css";

export const MainLayout = () => {
  const { addToDo } = useTodos();

  return (
    <div className={styles.root}>
      <div className={styles.titleInput}>
        <ToDoInput onAdd={(title) => addToDo(title)} />
      </div>
      <div className={styles.toDoList}>
        <Loading />
      </div>
    </div>
  );
};
