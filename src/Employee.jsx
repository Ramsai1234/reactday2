import React, { useState } from 'react';
import './App.css';

const Employee = ({ employee }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="employee-card">
      <img src="https://cdn.vectorstock.com/i/1000x1000/49/30/eye-icon-in-modern-design-style-for-web-site-vector-26504930.webp" alt="Employee" />
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