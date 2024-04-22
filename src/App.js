import "./App.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Body() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleGenreChange(event) {
    setGenre(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Tytuł: ", title);
    console.log("Rodzaj: ", genre);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tytuł filmu:
        <br />
        <input type="text" name="title" onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Rodzaj filmu:
        <br />
        <select onChange={handleGenreChange}>
          <option></option>
          <option value="1">komedia</option>
          <option value="2">Obyczajowy</option>
          <option value="3">Sensacyjny</option>
          <option value="4">Horror</option>
        </select>
      </label>
      <br />
      <input type="submit" value="Wyślij" className="btn btn-primary"/>

    </form>
  );
}

function App() {
  return (
    <>
      <div className="body">
        <Body />
      </div>
    </>
  )
}

export default App;
