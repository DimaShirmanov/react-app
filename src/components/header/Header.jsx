import './header.scss';
import Logo from '../../assets/logo.png';
import React, { Component } from 'react';

function HeaderItem(props) {
    return (
        <span className="header__item">{props.text}</span>
    )
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            round: 1,
            pf: '1 000 000',
            balance: '50 000',
            buy: '65'
        }
    }
    render() {
        return (
            <div className="header">
                <div className="header__logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="header__text">
                    <HeaderItem text={'Раунд ' + this.state.round}/>
                    <HeaderItem text={'ПФ: ' + this.state.pf + ' $'}/>
                    <HeaderItem text={'Баланс: ' + this.state.balance + ' руб.'}/>
                    <HeaderItem text={'Стоимость покупки: ' + this.state.buy + ' руб.'}/>
                </div>
            </div>
        );
    }
}

export default Header;
