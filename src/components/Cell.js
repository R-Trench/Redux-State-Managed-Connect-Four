import React, {useState} from 'react'
import {connect} from 'react-redux'

const Cell=(props)=>{

    const onMouseEnterHandler=(event)=>{
        event.target.style.cursor = "pointer"
    }

    const onMouseLeaveHandler=(event)=>{
            event.target.style.cursor = "default"
    }

    const attemptMove=(event)=>{
            if (props.playerOneTurn){
                props.onPlayerTurnChange()
                props.validMoveWasMade([props.rowNum,props.cellNum,1])
    
            } else if (!props.playerOneTurn){
                props.onPlayerTurnChange()   
                props.validMoveWasMade([props.rowNum,props.cellNum,2])
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
        validMoveWasMade: (vals)=> dispatch({type:'VALID_MOVE', payload: vals})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cell)
