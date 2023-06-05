//packages
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

//extra-reducers
import { addTaskAsync } from "../../store/todoSlice/todoSlice";

const Field = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const value = data.addTask;
    console.log(value);

    dispatch(addTaskAsync(value));

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            placeholder="write a task"
            {...register("addTask", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 5,
                message: "Минимум 5 букв",
              },
            })}
          />
          <input type="submit" value="add task" />
        </label>
        <div>
          {errors?.addTask && <p>{errors?.addTask?.message || "Error"}</p>}
        </div>
      </form>
    </div>
  );
};

export default Field;
