import { ToDoList } from "../../features/todo-list/todo-list";
import { useTodos } from "../hooks/useTodos";

export const Loading = () => {
  const { isLoading, isError, error } = useTodos();

  if (isLoading) return <div>Loading...</div>;

  if (isError && error) {
    if ("status" in error) {
      return <div>Error: {error.status}</div>;
    }
    return <div>Error: {error.message}</div>;
  }

  return <ToDoList />;
};
