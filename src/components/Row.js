import React from 'react'
import Cell from './Cell'

const Row=(props)=>{

    return (
        <React.Fragment>
        <tr>
            <Cell cellNum='0' rowNum={props.rowNum} value={props.board[0]}/>
            <Cell cellNum='1' rowNum={props.rowNum} value={props.board[1]}/>
            <Cell cellNum='2' rowNum={props.rowNum} value={props.board[2]}/>
            <Cell cellNum='3' rowNum={props.rowNum} value={props.board[3]}/>
            <Cell cellNum='4' rowNum={props.rowNum} value={props.board[4]}/>
            <Cell cellNum='5' rowNum={props.rowNum} value={props.board[5]}/>
        </tr>
        </React.Fragment>
    )

  
}

export default Row

