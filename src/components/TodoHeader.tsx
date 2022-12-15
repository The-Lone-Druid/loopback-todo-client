import { format } from "date-fns";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const TodoHeader = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="header p-4 flex items-center justify-between">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <span className="material-icons text-white">arrow_back</span>
      </button>
      <h1 className="text-[32px] text-white font-extrabold text-center">
        Add New Todo
      </h1>
      <span className="material-icons" style={{ visibility: "hidden" }}>
        arrow_back
      </span>
    </div>
  );
};

export default TodoHeader;
