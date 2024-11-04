import React, { useEffect } from "react";
import ShortUniqueId from "short-unique-id";

const Form = ({
  isInput,
  setInput,
  isTodos,
  setTodods,
  setoIsEdit,
  isEdit,
}) => {
  console.log(isEdit, "isEdit");
  const updateTodo = (title, id, completed) => {
    const newTodo = isTodos.map((todo) =>
      todo.id === id ? { title: title, id: id, coppleted: completed } : todo
    );
    console.log(newTodo, isTodos, "newTodo");
    setTodods(newTodo);
    setInput("");
    setoIsEdit({});
  };

  const onFormSubmit = (event) => {
    console.log(isEdit, "isEdit ");

    if (isEdit && isEdit?.id) {
      event.preventDefault();
      updateTodo(isInput, isEdit && isEdit.id, isEdit && isEdit.completed);
    } else {
      const uid = new ShortUniqueId({ length: 10 });
      uid.rnd(); // p0ZoB1FwH6

      event.preventDefault();
      setTodods([
        ...isTodos,
        { id: uid.rnd(), title: isInput, completed: false },
      ]);
      setInput("");

      // updateTodo(isInput, isEdit.id, isEdit.completed);

      console.log(uid.rnd(), "UUUU");
    }
  };

  useEffect(() => {
    if (isEdit && isEdit?.id) {
      console.log(isEdit && isEdit?.title, "isEdit");
      setInput(isEdit && isEdit?.title);
    } else {
      setInput("");
    }
  }, [setInput, isEdit]);

  const onInputChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter the Todo...."
        required
        value={isInput}
        onChange={onInputChange}
      />

      <button type="submit" className="button-add">
        {isEdit && isEdit?.id ? "Ok" : "Add"}
      </button>
    </form>
  );
};

export default Form;
