import { useState, useEffect } from 'react'
import './App.css'

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        {percentage > 0 && <span>{`${percentage}%`}</span>}
      </div>
    </div>
  );
};


function App() {

  const [count, setCount] = useState(0)
  const test = Math.floor(Math.random() * 5); 

  
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const numberQuestion = () => {
    if (count < 10) { 
    setCount(count + 1);
    }
  };



  return (
    
  <div className='main app'>



      <ProgressBar percentage={progress} />



    
    <div className='bar'> </div>
        <div className='progress'>Quiz Progress | {count} | </div>

        <div>
        <button onClick={increaseProgress}>Submit</button>
       <button onClick={numberQuestion}> NumberQuestion</button>
        </div>
  </div>
  
  );
}

export default App
