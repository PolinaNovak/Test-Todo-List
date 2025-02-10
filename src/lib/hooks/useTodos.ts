import { nanoid } from "@reduxjs/toolkit";
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "../storage/todos-api";
import { IToDo } from "../../types/todo";

export const useTodos = () => {
  const { data: todos, isLoading, isError, error } = useGetTodosQuery();

  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const deleteToDo = async (todoId: string) => {
    try {
      await deleteTodo(todoId).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  const completeToDo = async (todo: IToDo) => {
    try {
      await updateTodo(todo).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  const addToDo = async (title: string) => {
    try {
      await addTodo({
        id: nanoid(),
        title: title,
        completed: false,
      }).unwrap();

      alert("Task was added!");
    } catch (e) {
      console.error(e);
    }
  };

  return {
    todos,
    deleteToDo,
    completeToDo,
    addToDo,
    isLoading,
    isError,
    error,
  };
};
