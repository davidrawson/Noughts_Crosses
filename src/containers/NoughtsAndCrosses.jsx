import React, {Component} from 'react';
import Grid from '../components/Grid';
import LINES_OF_THREE from '../helpers/linesOfThree';
import ReplayButton from '../components/ReplayButton';
import Status from '../components/Status';

class NoughtsAndCrosses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9).fill(null),
      winner: null,
      currentPlayer: "O",
      winningLine: Array(3)
    };
    this.markSquare = this.markSquare.bind(this);
    // this.markWinningSquare = this.markWinningSquare.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  isEmptySquare(location){
    return !this.state.grid[location];
  }

  isGameOver(){
    return this.state.winner !== null;
  }

  markSquare(location) {
    if (this.isEmptySquare(location) && !this.isGameOver()) {
      const newGrid = this.state.grid.slice();
      newGrid[location] = this.state.currentPlayer;

      this.setState({grid: newGrid}, this.checkGameWon);
    }
  }

  markWinningSquares() {
    // this.state.winningLine[0]
    const newGrid = this.state.grid.slice();
    newGrid[this.state.winningLine[0]] = this.state.winningSquare;

  }

  checkGameWon() {
    let winner = null; // is it not already wet to null formthe constructor?

    LINES_OF_THREE.forEach((line, index) => {
      if (line.every(squareIndex => this.state.grid[squareIndex] === this.state.currentPlayer)) {
        winner = this.state.currentPlayer;
        this.setState({winningLine: line})
      }

    });

    if (!winner && this.gridComplete()) {
      winner = "DRAW";
    }

    // if (winner) {
    //   this.markWinningSquares();
    // }

    winner ? this.setState({winner: winner}) : this.nextTurn();
  }

  nextTurn() {
    if (this.state.currentPlayer === "X") {
      this.setState({currentPlayer: "O"})
    } else {
      this.setState({currentPlayer: "X"})
    }
  }

  gridComplete() {
    return !this.state.grid.includes(null);
  }

  newGame() {
    this.setState({
      grid: Array(9).fill(null),
      winner: null,
      currentPlayer: "O",
      winningLine: Array(3)
    })
  }

  render() {
    return (
      <div>
        <Grid
          grid={this.state.grid}
          markSquare={this.markSquare}
          winningLine={this.state.winningLine}
        />
        <Status
          winner={this.state.winner}
        />
        <ReplayButton
          isVisible={this.state.winner}
          callback={this.newGame}
          text='Play Again'
          className='replay-button'
        />
      </div>
    )
  }
}

export default NoughtsAndCrosses;
