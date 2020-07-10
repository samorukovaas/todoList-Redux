import React from "react";
import { useDispatch } from "react-redux";
import { completed, deleteTodo } from "../../Containers/Counter/actionCreators";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos }) => {
  const dispatch = useDispatch()
  const onDeleteTodo = (value) => dispatch(deleteTodo(value));
  const onCompleteTodo = (value) => dispatch(completed(value));

  return (
<>
    {todos.map(({ id, completed, text }) => (
      <TodoItem
        id={id}
        completed={completed}
        text={text}
        onCompleteTodo={onCompleteTodo}
        onDeleteTodo={onDeleteTodo}
      />
    ))}
  </>
  )
}


export default TodoList;
