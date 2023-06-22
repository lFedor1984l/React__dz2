import React, { Component } from "react";

import './DataLook.css';
import Work from "../Work/Work";

export default class DataLook extends Component {
    render() {
        return(
            <div className="container look">
                <p className="text__look">Фамилия: <span className="txt__look">{this.props.info.surname}</span></p>
                <p className="text__look">Имя: <span className="txt__look">{this.props.info.name}</span></p>
                <p className="text__look">Отчество: <span className="txt__look">{this.props.info.patronymic}</span></p>
                <p className="text__look">Дата рождения: <span className="txt__look">{this.props.info.date}</span></p>
                <p className="text__look">Почта: <span className="txt__look">{this.props.info.mail}</span></p>
                <p className="text__look">Город: <span className="txt__look">{this.props.info.city}</span></p>

                <div className="skils__inner">
                    <p className="text__look">Ваши навыки:</p>
                    <ul className="skils__list">
                        {this.props.info.skils.map((el, i) => (<li className="txt__look skils__item" key = {i}>{el}</li>))}
                    </ul>
                </div>
                <div>
                <h2>Опыт работы</h2>
                    {this.props.info.expir.map(el => (
                        <Work  expir = {el} />
                    ))} 
                </div>
                <div className="story__me">
                    <p className="text__look">О себе: <span className="txt__look">{this.props.info.aboutme}</span></p>
                </div>
            </div>
        )
    }
}