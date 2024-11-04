import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/FormList";

function App() {
  const [isInput, setInput] = useState("");
  const [isTodos, setTodods] = useState([]);
  const [isEdit, setoIsEdit] = useState(null);
  console.log(isTodos, "isTodos");
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
          <Form
            setInput={setInput}
            isInput={isInput}
            setTodods={setTodods}
            isTodos={isTodos}
            setoIsEdit={setoIsEdit}
            isEdit={isEdit}
          />
          <div>
            <TodoList
              isTodos={isTodos}
              setTodods={setTodods}
              setoIsEdit={setoIsEdit}
              isEdit={isEdit}
              setInput={setInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
