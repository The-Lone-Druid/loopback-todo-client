import React from "react";
import { CategoryEvent, CategoryGoal, CategoryTask } from "../assets/images";
import { Header } from "../components";
import data from "../assets/mock/mockdata.json";
import {
  NewTodo,
  useGetTodosMutation,
  usePatchTodosByIdMutation
} from "../services/todoApi";
import TodoItem from "../components/TodoItem";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { PatchTodosByIdApiArg } from "../services/todoApi";
import Loader from "../components/Loader";

type Props = {};

const Home = (props: Props) => {
  const [inProgressTodos, setInProgressTodos] = React.useState<
    NewTodo[] | null
  >(null);
  const [completedTodos, setCompletedTodos] = React.useState<NewTodo[] | null>(
    null
  );
  const navigate = useNavigate();
  const [getInProgressTodos, inProgressTodosResponse] = useGetTodosMutation();
  const [getCompletedTodos, completedTodoResponse] = useGetTodosMutation();
  const [completedCollapse, setCompletedCollapse] = React.useState(true);
  const [loaderMessage, setLoaderMessage] = React.useState("Loading...");
  // todo status update api hook
  const [toggleTodoStatus, toggleTodoStatusResponse] =
    usePatchTodosByIdMutation();

  React.useEffect(() => {
    // get inprogress filtered todos
    getInProgressTodos({
      filter: JSON.stringify({
        order: "id DESC",
        where: {
          isComplete: false
        }
      })
    }).then(() => {
      setLoaderMessage("Fetching todos...");
    });
    // get completed filtered todos
    getCompletedTodos({
      filter: JSON.stringify({
        order: "id DESC",
        where: {
          isComplete: true
        }
      })
    }).then(() => {
      setLoaderMessage("Fetching todos...");
    });
  }, [toggleTodoStatusResponse.isSuccess]);

  // storing incomplete todos in state
  React.useEffect(() => {
    if (inProgressTodosResponse.isSuccess) {
      setInProgressTodos(inProgressTodosResponse.data);
    }
  }, [inProgressTodosResponse.isSuccess]);

  // storing completed todos in state
  React.useEffect(() => {
    if (completedTodoResponse.isSuccess) {
      setCompletedTodos(completedTodoResponse.data);
    }
  }, [completedTodoResponse.isSuccess]);

  const toggleTodoStatusAsync = async (
    e: React.ChangeEvent<HTMLInputElement>,
    todo: NewTodo
  ) => {
    const reqPayload: PatchTodosByIdApiArg = {
      id: todo?.id,
      todoPartial: {
        isComplete: e.currentTarget.checked
      }
    };
    setLoaderMessage("Updating todos...");
    toggleTodoStatus(reqPayload);
  };

  return (
    <div className="bg-[#F1F5F9] h-[100vh] overflow-y-auto pb-[80px]">
      {/* header */}
      <Header />
      {/* body */}
      <div className="p-4">
        {/* todo list in progresas */}
        <div className="rounded-[16px] bg-white overflow-hidden">
          <div className=" flex gap-[1px] flex-col bg-gray-300">
            {/* todo component */}
            {inProgressTodos && inProgressTodos.length > 0 ? (
              inProgressTodos.map((todo, index) => {
                return (
                  <TodoItem
                    toggleTodoStatusAsync={toggleTodoStatusAsync}
                    todo={todo}
                    key={index}
                  />
                );
              })
            ) : inProgressTodosResponse.isLoading ? (
              <div className="text-center py-4">Loading....</div>
            ) : (
              <div className="text-center py-4 bg-white text-gray-500">
                All Clear...
              </div>
            )}
          </div>
        </div>
        {/* todo list completed */}
        {completedTodos && completedTodos.length > 0 ? (
          <h5
            className="text-[18px] text-black font-bold mt-5 mb-2 cursor-pointer flex items-center justify-between"
            onClick={() => {
              setCompletedCollapse(!completedCollapse);
            }}
          >
            Completed
            <i className="material-icons">
              {completedCollapse ? "arrow_drop_up" : "arrow_drop_down"}
            </i>
          </h5>
        ) : null}

        {/* collapsible div */}
        {completedCollapse ? (
          <div className="rounded-[16px] bg-white overflow-hidden">
            <div className=" flex gap-[1px] flex-col bg-gray-300">
              {/* todo component */}
              {completedTodos &&
                completedTodos.map((todo, index) => {
                  return (
                    <TodoItem
                      toggleTodoStatusAsync={toggleTodoStatusAsync}
                      todo={todo}
                      key={index}
                    />
                  );
                })}
            </div>
          </div>
        ) : null}
      </div>
      {/* footer */}
      <div className="fixed bottom-[0px] left-[0px] right-[0px] p-4">
        <Button
          onClick={() => {
            navigate("/add-todo");
          }}
        >
          Add New Todo
        </Button>
      </div>
      {/* Loader */}
      {inProgressTodosResponse.isLoading ||
      completedTodoResponse.isLoading ||
      toggleTodoStatusResponse.isLoading ? (
        <Loader message={loaderMessage} />
      ) : null}
    </div>
  );
};

export default Home;
