import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="title font-MontserratBold">
          CSS Weather Forecast
        </h1>
        <>
          <ul className="list-weather">
            <li className="list-item lisbon">
              <span>Lisbon</span> 21°C
            </li>
            <li className="list-item paris">
              <span>Paris</span> 11°C 
            </li>
            <li className="list-item bel">
              <span>Belgrade</span> 15°C 
            </li>
            <li className="list-item venice">
              <span>Venice</span> 21°C
            </li>
            <li className="list-item tel">
              <span>Tel-Aviva</span> 32°C 
            </li>
            <li className="list-item cairn">
              <span>Cairo</span> 21°C 
            </li>
            <li className="list-item new-york">
              <span>New-York</span> 17°C
            </li>
            <li className="list-item new-d">
              <span>New-Delhi</span> 17°C
            </li>
            <li className="list-item san-f">
              <span>San-Francisco</span> 15°C
            </li>
            <li className="list-item tokyo">
              <span>Tokyo</span> 8°C 
            </li>
            <li className="list-item sydney">
              <span>Sydney</span> 25°C
            </li>
          </ul>
          <p className="font-MontserratBold">
            Have a nice day and don't forget umbrella if you are in New Delhi now!
          </p>
        </>
      </div>
    </div>
  );
}

export default App;
