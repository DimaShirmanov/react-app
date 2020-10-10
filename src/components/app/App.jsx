import React, { Component } from 'react';
import './app.scss';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import Ball from '../ball/Ball.jsx';
import Balls from '../balls/Balls.jsx';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="content">
                    <div className="balls">
                        <Balls/>
                    </div>
                    <Ball />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
