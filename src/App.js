import React from 'react';
import './App.css';

function App() {
  return (
    <div className="whole-div">
    <div className="enter-value-div">
    <input type="text" placeholder="Enter the value"/>
    <button>Add</button>
    </div>
     <div>
     <input className="add-data-list"/>
     <button>Edit</button>
      <button>Delete</button>
     </div>
    </div>
  );
}

export default App;