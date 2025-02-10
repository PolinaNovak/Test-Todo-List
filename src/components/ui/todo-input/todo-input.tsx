import { useState } from "react";
import styles from "./todo-input.module.css";

export const ToDoInput = ({ onAdd }: { onAdd: (title: string) => void }) => {
  const [toDoTitle, setToDoTitle] = useState("");

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDoTitle(event.target.value);
  };

  const onTitleAdd = () => {
    setToDoTitle("");
    return onAdd(toDoTitle);
  };

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        type="text"
        value={toDoTitle}
        onChange={(event) => onTitleChange(event)}
      />
      <button onClick={() => onTitleAdd()} className={styles.add} type="button">
        Add
      </button>
    </div>
  );
};
