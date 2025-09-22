import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening', isCompleted: false},
  {id: 2, title: 'Rent the movie for tomorrow movie night', isCompleted: false},
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isCompleted: false,
  },
  {id: 4, title: 'Drop the parcel at Bloomingdale', isCompleted: false},
  {id: 5, title: 'Order fruits on Big Basket', isCompleted: false},
  {id: 6, title: 'Fix the production issue', isCompleted: false},
  {id: 7, title: 'Confirm my slot for Saturday Night', isCompleted: false},
  {id: 8, title: 'Get essentials for Sunday car wash', isCompleted: false},
]

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    newTodo: '',
  }

  handleChange = event => {
    this.setState({newTodo: event.target.value})
  }

  addTodo = () => {
    const {newTodo, todoList} = this.state
    if (newTodo.trim() === '') return

    const parts = newTodo.trim().split(' ')
    const lastPart = parts[parts.length - 1]
    let count = 1
    let title = newTodo

    if (!isNaN(lastPart)) {
      count = parseInt(lastPart)
      title = parts.slice(0, -1).join(' ')
    }

    const newTodos = Array.from({length: count}, (_, index) => ({
      id: todoList.length + index + 1,
      title,
      isCompleted: false,
    }))

    this.setState({
      todoList: [...todoList, ...newTodos],
      newTodo: '',
    })
  }

  deleteTodoItem = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.id !== id),
    }))
  }

  updateTodoTitle = (id, newTitle) => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.id === id ? {...todo, title: newTitle} : todo,
      ),
    }))
  }

  toggleComplete = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo,
      ),
    }))
  }

  render() {
    const {todoList, newTodo} = this.state
    return (
      <div className="todo-bg-con">
        <div className="todo-list-con">
          <h1 className="heading">Simple Todos</h1>

          <div className="add-todo-con">
            <input
              type="text"
              placeholder="Enter todo or 'title count'"
              value={newTodo}
              onChange={this.handleChange}
              className="input"
            />
            <button type="button" className="add-btn" onClick={this.addTodo}>
              Add
            </button>
          </div>

          <ul className="todos">
            {todoList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                onDeleteTodo={this.deleteTodoItem}
                onUpdateTitle={this.updateTodoTitle}
                onToggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
