import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IToDo } from "../../types/todo";

export const todosApi = createApi({
  reducerPath: "todosApi",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getTodos: builder.query<IToDo[], void>({
      query: () => `todos`,
      providesTags: ["Todos"],
    }),

    addTodo: builder.mutation<IToDo, IToDo>({
      query: (body) => ({
        url: `todos`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todos"],
    }),

    deleteTodo: builder.mutation<IToDo, string>({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),

    updateTodo: builder.mutation<IToDo, IToDo>({
      query: (body) => ({
        url: `todos/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosApi;
