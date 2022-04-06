import React, { useState } from "react";
import InputField from "../InputField/InputField";
import "./styles.css";
import { Todo } from "../Model/model";
import TodoList from "../TodoList/TodoList";
const Dashboard: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  console.log(todo);

  return (
    <div>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Dashboard;
