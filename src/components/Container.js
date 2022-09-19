import { useState } from "react"



const Container = () => {

    const [selected, setSelected] = useState(false)

    const answer = 'JavaScript'

    const handleSubmit = (e) => {
        if(answer === e.target.textContent){
            e.target.style.backgroundColor = 'green'
        }else {
            e.target.style.backgroundColor = 'red'
        }
        setSelected(true)
    }

  return (
    <div className='container'>
        <div className="question__container">
            <h1 className='question__count'>Question - 1</h1>
            <hr className='hr-line'/>
            <h3 className='question'>Which language is used as a logic in web app?</h3>
        </div>
        <div className="answer__container">
            <p className='answer' onClick={handleSubmit}>C++</p>
            <p className='answer' onClick={handleSubmit}>Java</p>
            <p className='answer' onClick={handleSubmit}>JavaScript</p>
            <p className='answer' onClick={handleSubmit}>Python</p>
        </div>

        {selected && <div className="result__container">
            <p className="result">RIGHT ANSWER: {answer}</p>
        </div>}
    </div>
  )
}

export default Container