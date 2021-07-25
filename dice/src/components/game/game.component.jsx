import React from 'react';

import Die from '../die/die.component';

import './game.styles.css'

class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            die1: "",
            die2: ""
            }
        }
    
    render() {
        return(
            <div className="game">
                <div className="dice">
                    <Die />
                    <Die />
                </div>
                <button className="rolling">Roll dice!</button>
            </div>
        )
    }
};
export default Game;
