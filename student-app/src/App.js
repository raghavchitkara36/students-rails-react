//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import MyStudentContainer from './Components/MyStudentContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Student List</h1>
        </div>
        <MyStudentContainer />
      </div>
    );
  }
}

export default App;
