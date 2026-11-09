import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";
import React, { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
  console.log('onTodoDelete()');
  }

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete}
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified step by step."
        />
        <Todo onTodoDelete={onTodoDelete}
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next 5 weeks."
        />
        <Todo onTodoDelete={onTodoDelete}
          title="Land a $100k Job"
          paragraph="Apply to 100 jobs. Secure a high-paying position."
        />
      </div>
      {showModal && <Modal title="Confirm delete?" />}
    </div>
  );
}

export default App;
