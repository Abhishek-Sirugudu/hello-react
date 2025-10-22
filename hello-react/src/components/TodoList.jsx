import { useState } from "react";


function TodoList() {
    const [todos, settodos] = useState([
        { id: 1, text: "Learn React State" },
        { id: 2, text: "Build a To-Do List" }
    ]);

    const [inputvalue, SetValue] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        
        const newToDo = {
            id : Date.now(),
            text :inputvalue
        };

        settodos([...todos, newToDo]);

        SetValue("");
    }

    return (
    <div>
      <h2>React To-Do List</h2>
      
      {/* 5. Hook up the form's onSubmit event */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={inputvalue} // Controlled component
          onChange={e => SetValue(e.target.value)} // Controlled component
        />
        <button type="submit">Add</button>
      </form>

      {/* 6. Render the list by mapping over the todos array */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );

}

export default TodoList;