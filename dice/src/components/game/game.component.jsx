import React from 'react';

import Button from '../button/button.component';
import Die from '../die/die.component';

import './game.styles.css'

class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            die1: 'one',
            die2: 'two',
            rolling: false
            }
        }

    stringfyNumber = () => {
        let num = Math.floor(Math.random() * 6 + 1);
        if (num === 1) {
            return 'one'
        } else if (num === 2) {
            return 'two'
        } else if (num === 3 ) {
            return 'three'
        } else if (num === 4) {
            return 'four'
        } else if (num === 5 ) {
            return 'five'
        } else {
            return 'six'
        }
    }

    handleCick = () => {
        this.setState({die1: this.stringfyNumber(), die2: this.stringfyNumber(), rolling: true})
        
        setTimeout(() => {
            this.setState({rolling:false})
        }, 1000)
    }
    
    render() {
        return(
            <div className="game">
                <div className="dice">
                    <Die num={this.state.die1} rolling={this.state.rolling}/>
                    <Die  num={this.state.die2} rolling={this.state.rolling}/>
                </div>
                
                {this.state.rolling ? <Button disabled={this.state.rolling} text="Rolling!" action={this.handleCick}/> : <Button disabled={this.state.rolling} text="Roll dice!" action={this.handleCick}/>}
                
            </div>
        )
    }
};
export default Game;
