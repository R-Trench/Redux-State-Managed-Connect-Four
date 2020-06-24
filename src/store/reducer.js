const INITIAL_STATE = {
    playerOneTurn: true,
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
        newBoard[action.payload[1]][action.payload[0]] = action.payload[2]      
        return {
            ...state,
            board: newBoard
        } 
        default: return state
    } 
    
}

export default reducer