export function ToDoCounter(props) {
  return (
    <h1>
      {props.completed} completed from {props.total}
    </h1>
  );
}
