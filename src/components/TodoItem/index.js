// Write your code here
// <TodoItem todoDetails={eachTodo} key={eachTodo.id} deleteTodo={this.deleteTodoItem}/>

import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="del-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
