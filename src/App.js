import { useState } from "react";
import "./App.css";

function App() {
  const [displayTime, setDisplayTime] = useState(25 * 60);

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };

  return (
    <div className="App">
      <Length
        title={"break length"}
        changeTime={null}
        type={"break"}
        time={null}
        formatTime={formatTime}
      />
      <div id="break-label">{formatTime(displayTime)}</div>
    </div>
  );
}

function Length({ title, changeTime, type, time, formatTime }) {
  return (
    <div>
      <h3>{title}</h3>
      <div class="time-sets">
        <button class="btn-small deep-purple lighten-2">
          <i class="material-icons">arrow_downward</i>
        </button>
      </div>
    </div>
  );
}

export default App;
