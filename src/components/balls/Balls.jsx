import React, { Component } from 'react';
import BallImage from '../../assets/item__ball.png';
import './balls.scss';

class Balls extends Component {
    render() {
        return (
            <div className="balls">
                <img className="ball__item" src={BallImage} alt=""/>
                <img className="ball__item" src={BallImage} alt=""/>
                <img className="ball__item" src={BallImage} alt=""/>
                <img className="ball__item" src={BallImage} alt=""/>
            </div>
        );
    }
}

export default Balls;
