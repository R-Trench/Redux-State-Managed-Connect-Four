const INITIAL_STATE = {
    playerOneTurn: true,
    isWinner: false,
    board: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
        ]
}

const reducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){

    case 'CHANGE_PLAYER_TURN':
        return {
            ...state,
            playerOneTurn: !state.playerOneTurn,
            
        }



        case 'VALID_MOVE':
        const newBoard=state.board
        const row = action.payload[0]
        const col = action.payload[1]
        console.log(row)
        console.log(col)

        if (newBoard[5][col] === 0){
            newBoard[5][col] = action.payload[2]
        } else if (newBoard[4][col] === 0){
            newBoard[4][col] = action.payload[2]
        } else if (newBoard[3][col] === 0){
            newBoard[3][col] = action.payload[2]
        } else if (newBoard[2][col] === 0){
            newBoard[2][col] = action.payload[2]
        } else if (newBoard[1][col] === 0){
            newBoard[1][col] = action.payload[2]
        } else if (newBoard[0][col] === 0){
            newBoard[0][col] = action.payload[2]
        }
        return {
            ...state,
            board: newBoard
        } 

        case 'CHECK_WINNER':
        return {
            state
        }


















        default: return state
    } 
    
    
}

export default reducer