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
        return {
            ...state,
            board: [
                [0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0],
                [0,0,0,0,0,action.payload,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
            ]
        } 
        default: return state
    } 
    
}

export default reducer