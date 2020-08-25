import React, {Component} from 'react';
import Grid from '../components/Grid';
import LINES_OF_THREE from '../helpers/linesOfThree';

class NoughtsAndCrosses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9).fill(null),
      winner: null,
      currentPlayer: "O"
    };
    this.markSquare = this.markSquare.bind(this);
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

  checkGameWon() {
    let winner = null; // is it not already wet to null formthe constructor?

    LINES_OF_THREE.forEach((line) => {
      if (line.every(squareIndex => this.state.grid[squareIndex] === this.state.currentPlayer)) {
        winner = this.state.currentPlayer;
      }
    });

    if (!winner && this.gridComplete()) {
      winner = "Cat's Game!";
    }

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

  render() {
    return (
      <div>
        <Grid
          grid={this.state.grid}
          markSquare={this.markSquare}
        />
        {/* <GameStatus
          winner={this.state.winner}
        /> */}
        {/* <Button
          isVisible={this.state.winner}
          callback={this.newGame}
          text='Play Again'
          className='play-again-button'
        /> */}
      </div>
    )
  }
}

export default NoughtsAndCrosses;
