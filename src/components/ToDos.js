import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToDo, updateToDo } from "../features/todo/todoSlice";

function ToDos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editText, setEditText] = useState(""); 
  const [editingId, setEditingId] = useState(null); 

  const handleUpdate = (id, newText) => {
    dispatch(updateToDo({ id, text: newText }));
    setEditingId(null); 
  };

  const handleEditStart = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };



  const handleAdd = () => {
    if (editText.trim() !== "") {
      handleUpdate(editingId, editText);
      setEditText("");
    }
  };

  return (
    <div className="todolist">
      {todos.map((todo) => (
        <div className="item" key={todo.id}>
          {editingId === todo.id ? (
            <div>
              <input
              className="editinput"
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={handleAdd}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAdd();
                }}
              />
              <div className="btn">
                <button onClick={handleAdd}>Add</button>
              
              </div>

            </div>
          ) : (
            <div>
              <span>{todo.text}</span>
              <div className="btn">
              <button onClick={() => handleEditStart(todo.id, todo.text)}>Update</button>
              <button onClick={() => dispatch(removeToDo(todo.id))}>Remove</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ToDos;
