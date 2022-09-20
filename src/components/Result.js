import React from 'react'
import { Link } from 'react-router-dom'

const Result = ({ score, resetScore, limit }) => {
  return (
    <div className='container'>
        <div className="result__container">
            <p className='result'>You Scored {score} out of {limit}</p>
            <Link className='restart' to="/" onClick={resetScore}>Restart</Link>
        </div>
    </div>
  )
}

export default Result