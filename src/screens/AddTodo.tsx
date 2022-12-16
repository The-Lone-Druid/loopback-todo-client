import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useFormik } from "formik";
import React from "react";
import { Header } from "../components";
import Button from "../components/Button";
import TodoHeader from "../components/TodoHeader";
import * as Yup from "yup";
import { NewTodo, usePostTodosMutation } from "../services/todoApi";
import { useNavigate } from "react-router-dom";

type Props = {};

const TodoSchema = Yup.object({
  title: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  description: Yup.string().required("Required")
});

const AddTodo = (props: Props) => {
  const [addTodo, addTodoResponse] = usePostTodosMutation();
  const navigate = useNavigate();
  const addTodoFormik = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
      isComplete: false
    },
    validationSchema: TodoSchema,
    onSubmit: (values) => {
      addTodo({
        newTodo: values
      });
    }
  });

  React.useEffect(() => {
    if (addTodoResponse.isSuccess) {
      navigate("/");
    }
  }, [addTodoResponse.isSuccess, addTodoResponse.isError]);

  return (
    <div className="bg-[#F1F5F9] h-[100vh] overflow-y-auto pb-[80px]">
      {/* header */}
      <TodoHeader />
      {/* body */}
      <div className="p-4">
        <form onSubmit={addTodoFormik.handleSubmit}>
          <div className="flex items-center flex-col gap-[20px]">
            <TextField
              id="title"
              name="title"
              label="Title"
              value={addTodoFormik.values.title}
              onChange={addTodoFormik.handleChange}
              onBlur={addTodoFormik.handleBlur}
              error={
                addTodoFormik.touched.title && addTodoFormik.errors.title
                  ? true
                  : false
              }
              helperText={addTodoFormik.errors.title}
              variant="outlined"
              className="w-full"
            />
            <div className="w-full">
              <p className="mb-0 text-gray-500">Category</p>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={addTodoFormik.values.category}
                name="category"
                id="category"
                onChange={addTodoFormik.handleChange}
                onBlur={addTodoFormik.handleBlur}
              >
                <FormControlLabel
                  value="task"
                  control={<Radio />}
                  label="Task"
                />
                <FormControlLabel
                  value="event"
                  control={<Radio />}
                  label="Event"
                />
                <FormControlLabel
                  value="goal"
                  control={<Radio />}
                  label="Goal"
                />
              </RadioGroup>
              {addTodoFormik.touched.category &&
                addTodoFormik.errors.category && (
                  <p className="mb-0 text-red-500">
                    {addTodoFormik.errors.category}
                  </p>
                )}
            </div>
            <TextField
              id="description"
              name="description"
              label="Description"
              value={addTodoFormik.values.description}
              onChange={addTodoFormik.handleChange}
              onBlur={addTodoFormik.handleBlur}
              error={
                addTodoFormik.touched.description &&
                addTodoFormik.errors.description
                  ? true
                  : false
              }
              helperText={addTodoFormik.errors.description}
              variant="outlined"
              className="w-full"
              multiline={true}
              rows={4}
            />
          </div>
        </form>
      </div>
      {/* footer */}
      <div className="fixed bottom-[0px] left-[0px] right-[0px] p-4">
        <Button
          type="submit"
          onClick={() => {
            addTodoFormik.handleSubmit();
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddTodo;
