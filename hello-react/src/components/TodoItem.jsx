function TodoItem(props) {
    const { todo, onDelete, onToggle } = props;

    // This style logic is perfectly fine!
    const itemStyle = {
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#888' : '#000',
        cursor: 'pointer',
        marginRight: '10px' // Added some spacing
    };

    return (
        <li>
            {/* FIX: Move todo.text inside the span
              so the text itself is clickable.
            */}
            <span style={itemStyle} onClick={() => onToggle(todo.id)}>
                {todo.text}
            </span>
            
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </li>
    );
}

export default TodoItem;