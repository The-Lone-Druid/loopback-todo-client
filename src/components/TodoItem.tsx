import React from "react";
import { CategoryEvent, CategoryGoal, CategoryTask } from "../assets/images";
import { NewTodo } from "../services/todoApi";

type Props = {
  todo: NewTodo;
};

const TodoItem = ({ todo }: Props) => {
  return (
    <div className="p-[16px] flex items-center justify-between bg-white">
      <div className={`flex items-center ${todo.isComplete && "opacity-40"}`}>
        <img
          src={
            todo.category === "task"
              ? CategoryTask
              : todo.category === "event"
              ? CategoryEvent
              : todo.category === "goal"
              ? CategoryGoal
              : CategoryTask
          }
          alt={todo.category}
        />
        <h6 className={`font-bold ml-4 ${todo.isComplete && "line-through"}`}>
          {todo.title}
        </h6>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          value=""
          checked={todo.isComplete}
          onChange={() => {}}
          id="flexCheckDefault"
          className="h-[20px] w-[20px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TodoItem;
