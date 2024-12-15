


import './App.css'; // Import the CSS file

function App() {
  const today = new Date();
  const day = today.getDate(); // Day
  const month = today.getMonth() + 1; // Month (0-11 range, so add 1)
  const year = today.getFullYear(); // Year

  return (
    <div className="app-container">
      <h1 className="app-title">JSX</h1>
      <h3 className="name">My name is <span className="name-highlight">{"name"}</span></h3>
      <h3 className="day-label">This is the day</h3>
      <p className="date">{`${day}.${month}.${year}`}</p>
      <h3 className="random-number-label">A random number from 0 to 100:</h3>
      <p className="random-number">{Math.round(Math.random() * 100)}</p>
    </div>
  );
}

export default App;

