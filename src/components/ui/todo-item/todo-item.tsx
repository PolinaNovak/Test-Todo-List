import styles from "./todo-item.module.css";

const CompletionStatus = {
  completed: "completed",
  incompleted: "incompleted",
};

interface ToDoListProps {
  title: string;
  status?: keyof typeof CompletionStatus;
  onDelete: () => void;
  onComplete: () => void;
}

export const ToDoItem = ({
  title,
  status = "incompleted",
  onDelete,
  onComplete,
}: ToDoListProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.upperBody}>
        <span className={styles.title}>{title}</span>
        <button className={styles.delete} type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
      <div className={styles.lowerBody}>
        <div className={styles.checkbox}>
          <label htmlFor="completed"></label>
          <input type="checkbox" id="completed" onChange={onComplete} />
        </div>
        <div className={styles.status}>{status}</div>
      </div>
    </div>
  );
};
