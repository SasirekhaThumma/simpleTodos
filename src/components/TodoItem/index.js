import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteTodo, onUpdateTitle, onToggleComplete} = props
  const {id, title, isCompleted} = todoDetails

  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)

  const handleSave = () => {
    if (editedTitle.trim() !== '') {
      onUpdateTitle(id, editedTitle)
    }
    setIsEditing(false)
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onToggleComplete(id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={e => setEditedTitle(e.target.value)}
          className="edit-input"
        />
      ) : (
        <p className={`title ${isCompleted ? 'completed' : ''}`}>{title}</p>
      )}

      {isEditing ? (
        <button type="button" className="save-btn" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button
          type="button"
          className="edit-btn"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      )}

      <button
        type="button"
        className="del-btn"
        onClick={() => onDeleteTodo(id)}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem

