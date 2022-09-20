import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Option from "./Option"



const Container = ({ handleScore, handleLimit }) => {

    const data = [
        {
            question: "How long does it take to master React?",
            options: [
                {id: 1, option: "1 week"},
                {id: 2, option: "1 month"},
                {id: 3, option: "6 month"},
                {id: 4, option: "1 year"}
            ],
            answer: "1 year"
        },
        {
            question: "Which language is mainly used in Web Apps ?",
            options: [
                {id: 1, option: "Java"},
                {id: 2, option: "CPP"},
                {id: 3, option: "JavaScript"},
                {id: 4, option: "Kotlin"}
            ],
            answer: "JavaScript"
        },
    ]

    useEffect(() => {
        handleLimit(data.length)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const [selected, setSelected] = useState(false)

    const currentQuestion= data[count]
    const answer = currentQuestion.answer


    const handleSubmit = (e) => {

        if(e.target.textContent === answer){
            handleScore()
        }
        setSelected(true)
        setTimeout(handleNext, 1000)
    }


    const handleNext = () => {

        setSelected(false)

        if(count + 1 > data.length - 1){
            navigate('/result')
        }else {
            setCount(count + 1)
        }

    }



 
  return (
    <div className='container'>
        <div className="question__container">
            <h1 className='question__count'>Question - {count + 1}</h1>
            <hr className='hr-line'/>
            <h3 className='question'>{currentQuestion.question}</h3>
        </div>
        <div className="answer__container">

            {currentQuestion.options.map((opt) => {
                return <Option key={opt.id} opt={opt} selected={selected} handleSubmit={handleSubmit} />
            })}
        </div>
    </div>
  )
}

export default Container