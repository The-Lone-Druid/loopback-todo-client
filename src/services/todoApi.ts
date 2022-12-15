import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTodosCount: build.query<GetTodosCountApiResponse, GetTodosCountApiArg>({
      query: (queryArg) => ({
        url: `/todos/count`,
        params: { where: queryArg.where },
      }),
    }),
    putTodosById: build.mutation<PutTodosByIdApiResponse, PutTodosByIdApiArg>({
      query: (queryArg) => ({
        url: `/todos/${queryArg.id}`,
        method: "PUT",
        body: queryArg.todo,
      }),
    }),
    patchTodosById: build.mutation<
      PatchTodosByIdApiResponse,
      PatchTodosByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/todos/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.todoPartial,
      }),
    }),
    getTodosById: build.query<GetTodosByIdApiResponse, GetTodosByIdApiArg>({
      query: (queryArg) => ({
        url: `/todos/${queryArg.id}`,
        params: { filter: queryArg.filter },
      }),
    }),
    deleteTodosById: build.mutation<
      DeleteTodosByIdApiResponse,
      DeleteTodosByIdApiArg
    >({
      query: (queryArg) => ({ url: `/todos/${queryArg.id}`, method: "DELETE" }),
    }),
    postTodos: build.mutation<PostTodosApiResponse, PostTodosApiArg>({
      query: (queryArg) => ({
        url: `/todos`,
        method: "POST",
        body: queryArg.newTodo,
      }),
    }),
    patchTodos: build.mutation<PatchTodosApiResponse, PatchTodosApiArg>({
      query: (queryArg) => ({
        url: `/todos`,
        method: "PATCH",
        body: queryArg.todoPartial,
        params: { where: queryArg.where },
      }),
    }),
    getTodos: build.query<GetTodosApiResponse, GetTodosApiArg>({
      query: (queryArg) => ({
        url: `/todos`,
        params: { filter: queryArg.filter },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as todoApi };
export type GetTodosCountApiResponse =
  /** status 200 Todo model count */ LoopbackCount;
export type GetTodosCountApiArg = {
  where?: any;
};
export type PutTodosByIdApiResponse = /** status 204 No Content */ any;
export type PutTodosByIdApiArg = {
  id: number;
  todo: Todo;
};
export type PatchTodosByIdApiResponse = /** status 204 No Content */ any;
export type PatchTodosByIdApiArg = {
  id: number;
  todoPartial: TodoPartial;
};
export type GetTodosByIdApiResponse =
  /** status 200 Todo model instance */ TodoWithRelations;
export type GetTodosByIdApiArg = {
  id: number;
  filter?: any;
};
export type DeleteTodosByIdApiResponse = /** status 204 No Content */ any;
export type DeleteTodosByIdApiArg = {
  id: number;
};
export type PostTodosApiResponse = /** status 200 Todo model instance */ Todo;
export type PostTodosApiArg = {
  newTodo: NewTodo;
};
export type PatchTodosApiResponse =
  /** status 200 Todo PATCH success count */ LoopbackCount;
export type PatchTodosApiArg = {
  where?: any;
  todoPartial: TodoPartial;
};
export type GetTodosApiResponse =
  /** status 200 Array of Todo model instances */ TodoWithRelations[];
export type GetTodosApiArg = {
  filter?: any;
};
export type LoopbackCount = {
  count?: number;
};
export type Todo = {
  id?: number;
  title: string;
  isComplete?: boolean;
  category: string;
  [key: string]: any;
};
export type TodoPartial = {
  id?: number;
  title?: string;
  isComplete?: boolean;
  category?: string;
  [key: string]: any;
};
export type TodoWithRelations = {
  id?: number;
  title: string;
  isComplete?: boolean;
  category: string;
  [key: string]: any;
};
export type NewTodo = {
  title: string;
  isComplete?: boolean;
  category: string;
  [key: string]: any;
};
export const {
  useGetTodosCountQuery,
  usePutTodosByIdMutation,
  usePatchTodosByIdMutation,
  useGetTodosByIdQuery,
  useDeleteTodosByIdMutation,
  usePostTodosMutation,
  usePatchTodosMutation,
  useGetTodosQuery,
} = injectedRtkApi;
