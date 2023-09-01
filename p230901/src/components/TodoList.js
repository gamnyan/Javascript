const today = new Date();

const formatDate = (date) => (
    new Intl.DateTimeFormat('ko', {weekday:'long'}).format(date)
)

const TodoList = () => (
  <h1>To Do List for {formatDate(today)}</h1>
);

export default TodoList;