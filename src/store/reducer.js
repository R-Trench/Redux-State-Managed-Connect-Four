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
    if (action.type === 'CHANGE_PLAYER_TURN'){
        // console.log('CHANGE_PLAYER_TURN was invoked')
        // console.log(state.playerOneTurn)
        return {
            ...state,
            playerOneTurn: !state.playerOneTurn
        }
    } else {
        return state
    }
}

export default reducer