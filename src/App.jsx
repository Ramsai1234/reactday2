import React from 'react';
import './App.css';
import Employee from './Employee.jsx';

const employee = { name: 'P Ramsai', phone: '7993298328', address: 'Pallampeta', email: 'ponugotiramsai@gmail' };

const App = () => {
  return (
    <div className="App">
      <Employee employee={employee} />
    </div>
  );
};

export default App;