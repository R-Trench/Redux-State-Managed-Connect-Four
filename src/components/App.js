import React from 'react'
import {connect} from 'react-redux'

class App extends React.Component{

    doThing=()=>{
        console.log(this.props.myBoard)
    }

    printRow=()=>{
        console.log('function')
        this.props.myBoard[0].map(el=>{
            return <td>{el}</td>
        })
    }

    render(){
        return <div>
            <table onClick={this.props.onBoardClick}>
            <tbody>
                {
                    this.props.myBoard.map(el=>{
                    return <tr>{
                    this.props.myBoard[0].map(el=>{
                    return <td>{el}</td>
                    })
                }
                </tr>
                    })
                }
               
            </tbody>    
            </table>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        myBoard: state.board,
        playerTurn: state.playerTurn,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onBoardClick: ()=> dispatch({type:'CHANGE_PLAYER_TURN'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)