import './styles/App.css';
import Calendar from './Components/Calendar';
import React, { useState } from 'react';

function App() {
  const [date, setDate] = useState(new Date());

  const handlePromptDate = () => {
    try
    {
      const dateInput = prompt("Enter a date (yyyy-mm-dd):");
      const dateArray = dateInput.split("-");
      const year = parseInt(dateArray[0]);
      const month = parseInt(dateArray[1])-1;
      const day = parseInt(dateArray[2]);
      const newDate = new Date(year, month, day);
      setDate(newDate);
      console.log(date);
    }
    catch(e)
    {
      console.error("Invalid date input", e);
    }
  };
  
  return (
    <div className="container-fluid">
      <button onClick={handlePromptDate}>Enter Date</button>
      <Calendar date={date} />
    </div>
  );
}

export default App;
