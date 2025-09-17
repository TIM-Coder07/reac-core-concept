import { useState } from "react";

export default function BatsMan() {
  const [runs, setRuns] = useState(0);
  const [six, setSixes] = useState(0);

  const singleRun = () => {
    const updateRun = runs + 1;
    setRuns(updateRun)
    
  };

  const fourRun = () => {
    const fourRun = runs + 4
    setRuns(fourRun)
  }
  const sixRun = () => {
    const sixRun = runs + 6
    const updatesix = six + 1;
    setRuns(sixRun)
    setSixes(updatesix)
  }

  return (
    <div>
      <h3>player: BD BatsMAn</h3>
      <p>Six: {six}</p>
      <h1>Score: {runs}</h1>
      <button onClick={singleRun}>Single</button>
      <button onClick={fourRun}>Four</button>
      <button onClick={sixRun}>Six</button>
    </div>
  );
}
