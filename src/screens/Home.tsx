import React from "react";
import { CategoryEvent, CategoryGoal, CategoryTask } from "../assets/images";
import { Header } from "../components";
import data from "../assets/mock/mockdata.json";
import { NewTodo, useGetTodosQuery } from "../services/todoApi";
import TodoItem from "../components/TodoItem";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  const [todos, setTodos] = React.useState<NewTodo[] | null>(null);
  const todosDataResponse = useGetTodosQuery({});
  const navigate = useNavigate();

  React.useEffect(() => {
    if (todosDataResponse.isSuccess) {
      setTodos(todosDataResponse.data);
    }
  }, [todosDataResponse.isSuccess]);

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
            {todos &&
              todos.map((todo, index) => {
                return !todo.isComplete && <TodoItem todo={todo} key={index} />;
              })}
          </div>
        </div>
        {/* todo list completed */}
        <h5 className="text-[18px] text-black font-bold mt-5 mb-2">
          Completed
        </h5>
        <div className="rounded-[16px] bg-white overflow-hidden">
          <div className=" flex gap-[1px] flex-col bg-gray-300">
            {/* todo component */}
            {todos &&
              todos.map((todo, index) => {
                return todo.isComplete && <TodoItem todo={todo} key={index} />;
              })}
          </div>
        </div>
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
    </div>
  );
};

export default Home;
