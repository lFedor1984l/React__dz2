import React, { Component } from "react";
import './Work.css';

export default class Work extends Component {
    render() {
        return(
            <div className="work__inner">
                <div className="work__box">
                    <h3>Место работы:</h3>
                    <p className="work__title">{this.props.expir.organization}</p>
                    <p className="work__txt">Начало работы: <span className="work__text">{this.props.expir.beginning}</span></p>
                    <p className="work__txt">Конец работы: <span className="work__text">{this.props.expir.end}</span></p>
                </div>
            </div>
        )
    }
}