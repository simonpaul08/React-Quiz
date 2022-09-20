
import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Result from './components/Result';


function App() {

  const [score, setScore] = useState(0)
  const [limit, setLimit] = useState(0)

  const handleScore = () => {
    setScore(score + 1)
  }

  const resetScore = () => {
    setScore(0)
  }

  const handleLimit = (value) => {
    setLimit(value)
  }

  return (
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container handleScore={handleScore} handleLimit={handleLimit}/>} />

          <Route path='/result' element={<Result score={score} resetScore={resetScore} limit={limit}/>}/>
        </Routes>
      </BrowserRouter>

    </div>  
  );
}

export default App;
