import React from 'react'
import {connect} from 'react-redux'

const Cell=(props)=>{

    const style = {
        backgroundColor: 'white'
    }
    
    if (props.value === 1){
        style.backgroundColor = 'red'
    } else if(props.value === 2){
        style.backgroundColor = 'blue'
    }

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
                // props.CheckForWin()
    
            } else if (!props.playerOneTurn){
                props.onPlayerTurnChange()   
                props.validMoveWasMade([props.rowNum,props.cellNum,2])
                // props.CheckForWin()
            }
        }

        
    

    return <td 
    onMouseEnter={onMouseEnterHandler}
    onMouseLeave={onMouseLeaveHandler}
    onClick={attemptMove}
    style={style}

    ></td>
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
        validMoveWasMade: (vals)=> dispatch({type:'VALID_MOVE', payload: vals}),
        CheckForWin: ()=> dispatch({type:'CHECK_WINNER'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cell)
