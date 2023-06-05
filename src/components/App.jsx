//packages
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//components
import Field from "./Field/Field";
import List from "./List/List";

//extra-reducers
import { getTaskAsync } from "../store/todoSlice/todoSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTaskAsync());
    console.log("did update");
  }, [dispatch]);

  return (
    <div>
      <Field />
      <List />
    </div>
  );
};

export default App;
