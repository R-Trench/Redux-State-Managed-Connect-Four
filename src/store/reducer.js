const INITIAL_STATE = {
    player1turn: true,
    board: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
        ]
}

const reducer = (state = INITIAL_STATE, action) =>{
    if (action.type === 'CHANGE_PLAYER_TURN'){
        console.log('CHANGE_PLAYER_TURN was invoked')
        return {
            ...state,
            player1turn: false
            
        }
    } else {
        return state
    }
}

export default reducer