import React from 'react'
import {connect} from 'react-redux'
import Row from './Row'

class App extends React.Component{

    printPlayerTurn=()=>{
        if (this.props.playerOneTurn){
            return <p>Red's Turn</p>
        } else {
            return <p>Blue's Turn</p>
        }
     
    }

    render(){
        return <div>
            {this.printPlayerTurn()}
            <table>
            <tbody>
                <Row rowNum='0' board={this.props.myBoard[0]}/>
                <Row rowNum='1' board={this.props.myBoard[1]}/>
                <Row rowNum='2' board={this.props.myBoard[2]}/>
                <Row rowNum='3' board={this.props.myBoard[3]}/>
                <Row rowNum='4' board={this.props.myBoard[4]}/>
                <Row rowNum='5' board={this.props.myBoard[5]}/>
            </tbody>    
            </table>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        myBoard: state.board,
        playerOneTurn: state.playerOneTurn,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onPlayerTurnChange: ()=> dispatch({type:'CHANGE_PLAYER_TURN'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)