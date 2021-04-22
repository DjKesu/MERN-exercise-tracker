import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/navbar.component.js"
import ExercisesList from "./components/exercises-list.component.js"
import EditExercise from "./components/edit-exercise-list.component"
import CreateExercise from "./components/create-exercise-list.component"
import CreateUser from "./components/create-user.component"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <br />
      <Route path="/" exact component = {ExercisesList} />
      <Route path="/edit/:id" exact component = {EditExercise} />
      <Route path="/exercises" exact component = {CreateExercise} />
      <Route path="/users" exact component = {CreateUser} />
      </div>
    </Router>
  );
}

export default App;
