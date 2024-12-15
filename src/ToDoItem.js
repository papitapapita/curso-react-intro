function ToDoItem(props) {
  return (
    <li>
      <span>✅</span>
      <p>{props.description}</p>
      <span>❌</span>
    </li>
  );
}

export { ToDoItem };
