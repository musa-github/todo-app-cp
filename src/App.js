import React, { useState, useEffect } from "react";
import { Button, Input, InputLabel, FormControl } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodo = (e) => {
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="App">
      <h1>hello</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
