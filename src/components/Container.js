import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Option from "./Option"



const Container = ({ handleScore, handleLimit }) => {

    const data = [
        {
            question: "What is the hottest planet in the solar system ?",
            options: [
                {id: 1, option: "Mars"},
                {id: 1, option: "Venus"},
                {id: 1, option: "Jupiter"},
                {id: 1, option: "Mercury"}
            ],
            answer: "Venus"
        },
        {
            question: "Which country consumes the most chocolate per capita ?",
            options: [
                {id: 1, option: "Switzerland"},
                {id: 2, option: "Germany"},
                {id: 3, option: "France"},
                {id: 4, option: "Russia"}
            ],
            answer: "Switzerland"
        },
        {
            question: "What is the only edible food that never goes bad ?",
            options: [
                {id: 1, option: "Almonds"},
                {id: 2, option: "Honey"},
                {id: 3, option: "Peanut Butter"},
                {id: 4, option: "Seeds"}
            ],
            answer: "Honey"
        },
        {
            question: "What is the name of the largest ocean on earth ?",
            options: [
                {id: 1, option: "Pacific Ocean"},
                {id: 2, option: "Artic Ocean"},
                {id: 3, option: "Indian Ocean"},
                {id: 4, option: "Southern Ocean"}
            ],
            answer: "Pacific Ocean"
        },
        {
            question: "Which country borders 14 nations and crosses 8 time zones ?",
            options: [
                {id: 1, option: "Canada"},
                {id: 2, option: "Italy"},
                {id: 3, option: "Russia"},
                {id: 4, option: "India"}
            ],
            answer: "Russia"
        },
    ]

    useEffect(() => {
        handleLimit(data.length)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const [selected, setSelected] = useState(false)
    const [loading, setLoading] = useState(false)

    const currentQuestion= data[count]
    const answer = currentQuestion.answer


    const handleSubmit = (e) => {

        if(e.target.textContent === answer){
            handleScore()
        }
        setSelected(true)
        setLoading(true)
        setTimeout(() => {
            handleNext()
            setLoading(false)
        }, 1000)
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
        {loading && <div className="skeleton-container">
            <div className="question__container">
                <div className="skeleton skeleton-text" style={{width: '40%', height: '30px', marginBottom: '10px'}}></div>

                <div className="skeleton skeleton-text" style={{height: '8px', marginBottom: '8px'}}></div>
                <div className="skeleton skeleton-text" style={{height: '25px'}}></div>
            </div>

            <div className="answer__container">
                <div className="skeleton skeleton-answer"></div>
                <div className="skeleton skeleton-answer"></div>
                <div className="skeleton skeleton-answer"></div>
                <div className="skeleton skeleton-answer"></div>
            </div>
        </div>}
        {!loading && 
        <div>
        <div className="question__container">
            <h1 className='question__count'>Question - {count + 1}</h1>
            <hr className='hr-line'/>
            <h3 className='question'>{currentQuestion.question}</h3>
        </div>
        <div className="answer__container">

            {currentQuestion.options.map((opt) => {
                return <Option key={opt.id} opt={opt} selected={selected} handleSubmit={handleSubmit} />
            })}
        </div> </div>}
    </div>
  )
}

export default Container