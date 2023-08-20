import React, { useState } from "react";
import HabitForm from "./HabitForm";
import HabitList from "./HabitList";
import "./App.css";

function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  return (
    <div className='app-container'>
      <h1>Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      <HabitList habits={habits} />
    </div>
  );
}

export default App;
