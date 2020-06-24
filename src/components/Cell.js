import React, {useState} from 'react'

const Cell=(props)=>{

    const [isTaken, setIsTaken] = useState(false)

    const onMouseEnterHandler=(event)=>{
        event.target.style.background = 'lightgrey'
        event.target.style.cursor = "pointer"
    }

    const onMouseLeaveHandler=(event)=>{
        event.target.style.background = 'white'
        event.target.style.cursor = "default"
    }

    const attemptMove=(event)=>{
        
    }

    return <td 
    onMouseEnter={onMouseEnterHandler}
    onMouseLeave={onMouseLeaveHandler}
    onClick={attemptMove}

    >{props.value}</td>
}

export default Cell