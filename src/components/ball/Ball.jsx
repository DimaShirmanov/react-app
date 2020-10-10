import React, { Component } from 'react';
import BallImg from '../../assets/ball.png';
import './ball.scss';

class Ball extends Component {
    render() {
        return (
            <div className="ball__wrapper">
                <img src={BallImg} alt=""/>
            </div>
        );
    }
}

export default Ball;
