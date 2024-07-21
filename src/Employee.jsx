import React, { useState } from 'react';
import './App.css';

const Employee = ({ employee }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="employee-card">
      <img src="/src/assets/img.svg" alt="Employee" />
      <h2>{employee.name}</h2>
      <p>Phone: {employee.phone}</p>
      {showDetails && (
        <div>
          <p>Address: {employee.address}</p>
          <p>Email: {employee.email}</p>
        </div>
      )}
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
};

export default Employee;