import { useState } from "react";
import TodoItem from "./TodoItem";


function TodoList() {
  const [todos, settodos] = useState([ // Using 'settodos' is fine, but 'setTodos' is the convention
    { id: 1, text: "Learn React State", completed: false },
    { id: 2, text: "Build a To-Do List", completed: true }
  ]);

  const [inputvalue, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Optional: Prevent adding empty to-dos
    if (!inputvalue.trim()) {
        return;
    }

    const newToDo = {
      id: Date.now(),
      text: inputvalue,
      completed: false // <-- THE FIX
    };

    settodos([...todos, newToDo]);
    setValue("");
  }

  function handleDelete(idtoDel) {
    const filteredTodos = todos.filter(todo => todo.id !== idtoDel);
    settodos(filteredTodos);
  }

  function handleToggleComplete(idToToggle) {
    const newTodos = todos.map(todo => {
      if (todo.id === idToToggle) {
        return {
          ...todo, 
          completed: !todo.completed 
        };
      }
      return todo;
    });
    settodos(newTodos);
  }

  return (
    <div>
      <h2>React To-Do List</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputvalue}
          onChange={e => setValue(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onToggle={handleToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;