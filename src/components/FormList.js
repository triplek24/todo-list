import React from "react";

const TodoList = ({ isTodos, setTodods, setoIsEdit, isEdit, setInput }) => {
  console.log(isTodos, "JHJHJHJH");
  const handleDeleteTodo = ({ id }) => {
    console.log(id, "id");
    setTodods(isTodos.filter((t) => t.id !== id));
  };

  const handleComplete = ({ id }) => {
    setTodods(
      isTodos.map((t) => {
        if (t.id !== id) {
          return t;
        } else {
          return { ...t, completed: true };
        }
      })
    );
  };

  // const handleComplete = ({ id }) => {
  //   setTodods(
  //     isTodos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
  //   );
  // };
  const handleEdit = ({ id }) => {
    const findData = isTodos.find((todo) => todo.id === id);
    setoIsEdit(findData);
    setInput("");
  };
  return (
    <div>
      {isTodos.map((todo) => (
        <li className="list-item" key={todo.id}>
          {console.log(todo?.id, "IUIUIU")}
          <input
            type="text"
            className={`list ${todo && todo?.completed ? "complete" : ""}`}
            value={todo.title}
            onChange={(e) => {
              e.preventDefault();
              //   setTodods(e.target.value);
            }}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDeleteTodo(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
