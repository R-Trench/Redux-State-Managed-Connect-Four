import React, {useState} from 'react'
import {connect} from 'react-redux'

const Cell=(props)=>{

    const [isTaken, setIsTaken] = useState(false)

    const onMouseEnterHandler=(event)=>{
        if (props.playerOneTurn  && isTaken === false){
            event.target.style.background = 'IndianRed'
        } else if (!props.playerOneTurn  && isTaken === false){
            event.target.style.background = 'LightSkyBlue'
        }
        event.target.style.cursor = "pointer"
    }

    const onMouseLeaveHandler=(event)=>{
        if (isTaken === false){
            event.target.style.cursor = "default"
            event.target.style.background = 'white'
        }
    
    }

    const attemptMove=(event)=>{
        if (isTaken === false){
            if (props.playerOneTurn){
                event.target.style.background = 'red'
                props.onPlayerTurnChange()
                setIsTaken(true)
                props.validMoveWasMade([props.cellNum,props.rowNum,1])
    
            } else if (!props.playerOneTurn){
                event.target.style.background = 'blue'
                props.onPlayerTurnChange()   
                setIsTaken(true)
                props.validMoveWasMade([props.cellNum,props.rowNum,2])
            }
        }

        
    }

    return <td 
    onMouseEnter={onMouseEnterHandler}
    onMouseLeave={onMouseLeaveHandler}
    onClick={attemptMove}

    >{props.value}</td>
}

const mapStateToProps = state => {
    return {
        // myBoard: state.board,
        playerOneTurn: state.playerOneTurn,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onPlayerTurnChange: ()=> dispatch({type:'CHANGE_PLAYER_TURN'}),
        validMoveWasMade: (num)=> dispatch({type:'VALID_MOVE', payload: num})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cell)
