import React, { Component } from 'react';

export default class Card1 extends Component {

    render() {
        const { number, title, text } = this.props.data;
        return (
            <div className="box">
                <span>{number}</span>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        )
    }
}
