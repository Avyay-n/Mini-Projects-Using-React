import React from "react";
import Todo from "./Todo";

function TodoContainer({ todos, delTodo }) {
  return (
    <div  className="container">
      {todos.map((todo, index) => {
        return <Todo todo={todo} key={index} index={index} delTodo={delTodo}/>;
      })}
    </div>
  );
}

export default TodoContainer;
