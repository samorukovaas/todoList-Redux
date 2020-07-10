import React, { useState } from "react";
import { Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Containers/Counter/actionCreators";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const onAddTodo = (value) => dispatch(addTodo(value));

  const [text, setText] = useState("");

  const handleAddTodo = () => {
    setText("");
    onAddTodo(text);
  };

  return (
    <div id="add">
      <Input
        type="text"
        value={text}
        placeholder="Type the todo and press enter..."
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            handleAddTodo();
          }
        }}
      />
      <Button type="primary" onClick={handleAddTodo}>
        Add
      </Button>
    </div>
  );
};

export default AddTodoForm;
