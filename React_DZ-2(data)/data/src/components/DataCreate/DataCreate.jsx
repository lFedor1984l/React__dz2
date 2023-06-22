import React, { Component, createRef } from "react";
import DataLook from "../DataLook/DataLook";

import './DataCreate.css'


export default class DataCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: {
                foto: '',
                surname: '',
                name: '',
                patronymic: '',
                date: '',
                mail: '',
                city: '',
                expir: [],
                skils: [],
                aboutme: '',
            },

        }



        this.surname = React.createRef();
        this.name = React.createRef();
        this.patronymic = React.createRef();
        this.date = React.createRef();
        this.mail = React.createRef();
        this.city = React.createRef();
        this.story = React.createRef();

        this.skils = React.createRef();

        this.work = React.createRef();
        this.begin = React.createRef();
        this.ending = React.createRef();

        this.foto = React.createRef();
    }

    addFoto = () => {
        const objInfo = this.state.info;
        let inputFoto = this.foto.current.value;

        objInfo.foto = inputFoto;

        this.setState({
            foto: inputFoto,
        })

    }

    addInfo = () => {
        const objInfo = this.state.info;

        let inputSurname = this.surname.current.value;
        let inputName = this.name.current.value;
        let inputPatronymic = this.patronymic.current.value;
        let inputDate = this.date.current.value;
        let inputMail = this.mail.current.value;
        let inputStory = this.story.current.value;
        let inputCity = this.city.current.value;


        objInfo.surname = inputSurname;
        objInfo.name = inputName;
        objInfo.patronymic = inputPatronymic;
        objInfo.date = inputDate;
        objInfo.mail = inputMail;
        objInfo.aboutme = inputStory;
        objInfo.city = inputCity;

        this.setState({
            surname: inputSurname,
            name: inputName,
            patronymic: inputPatronymic,
            date: inputDate,
            mail: inputMail,
            city: inputCity,
            aboutMe: inputStory,
        });

        this.surname.current.value = '';
        this.name.current.value = '';
        this.patronymic.current.value = '';
        this.date.current.value = '';
        this.mail.current.value = '';
        this.story.current.value = '';
        this.city.current.value = '';
    }

    addSkils = () => {
        const skilsArr = [];
        let inputSkil = this.skils.current.value;
        skilsArr.push(inputSkil);

        const objInfo = this.state.info;
        objInfo.skils.push(inputSkil)

        this.setState({
            skils: skilsArr
        })
        this.skils.current.value = '';
    }


    addExpir = () => {
        const objExpir = {};
        let inputWork = this.work.current.value;
        let inputBegin = this.begin.current.value;
        let inputEnding = this.ending.current.value;

        objExpir.organization = inputWork;
        objExpir.beginning = inputBegin;
        objExpir.end = inputEnding;

        const objInfo = this.state.info;
        objInfo.expir.push(objExpir);

        this.setState({
            expir: objExpir
        })

        this.work.current.value = '';
        this.begin.current.value = '';
        this.ending.current.value = '';
    }




    render() {
        return (
            <div className="container inner">
                <div className="box__wrapper">
                    <div className="wrapper">
                        <div className="foto">
                            <input type="file" ref={this.foto} />
                            <img className="foto__img" src={this.state.info.foto} />
                            <button onClick={this.addFoto}>PPPP</button>
                        </div>

                        <div className="desc">

                            <div className="first__inner">
                                <div className="deck__box">
                                    <label className="label__text" htmlFor="surname">Фамилия</label>
                                    <input className="input__text" type="text" name="surname" id="surname" ref={this.surname} />
                                </div>

                                <div className="deck__box">
                                    <label className="label__text" htmlFor="name">Имя</label>
                                    <input className="input__text" type="text" name="name" id="name" ref={this.name} />
                                </div>

                                <div className="deck__box">
                                    <label className="label__text" htmlFor="patronymic">Отчество</label>
                                    <input className="input__text" type="text" name="patronymic" id="patronymic" ref={this.patronymic} />
                                </div>

                                <div className="deck__box">
                                    <label className="label__text" htmlFor="date">Дата рождения</label>
                                    <input className="input__text date__text" type="date" name="date" id="date" ref={this.date} />
                                </div>

                                <div className="deck__box">
                                    <label className="label__text" htmlFor="mail">Почта</label>
                                    <input className="input__text" type="email" name="mail" id="mail" ref={this.mail} />
                                </div>

                                <div className="deck__box">
                                    <label className="label__text" htmlFor="city">Город</label>
                                    <select className="city__text input__text" name="city" id="city" ref={this.city}>
                                        <option className="choice__city" value="Азов">Азов</option>
                                        <option className="choice__city" value="Ростов">Ростов</option>
                                        <option className="choice__city" value="Аксай">Аксай</option>
                                        <option className="choice__city" value="Батайск">Батайск</option>
                                        <option className="choice__city" value="Таганрог">Таганрог</option>
                                    </select>
                                </div>
                            </div>

                            <div className="second__inner">
                                <div className="deck__box">
                                    <label className="label__text expir__text" htmlFor="expir">Опыт работы</label>

                                    <label className="label__text" htmlFor="work">Название организации</label>
                                    <input className="input__text" type="text" name="work" id="work" ref={this.work} />

                                    <p className="text__work label__text">Начало работы</p>
                                    <input className="input__text" type="date" name="expir" id="expir" ref={this.begin} />
                                    <p className="text__work label__text">Конец работы</p>
                                    <input className="input__text" type="date" name="expir" id="expir" ref={this.ending} />

                                    <button className="button__input btn" onClick={this.addExpir}>ДОБАВИТЬ</button>
                                </div>

                                <div className="deck__box">
                                    <label className="label__text" htmlFor="skills">Ваши навыки</label>
                                    <input className="input__text" type="text" name="skills" id="skills" ref={this.skils} />
                                    <button className="button__input btn" onClick={this.addSkils}>ДОБАВИТЬ</button>
                                </div>
                            </div>

                        </div>

                        <div className="deck__box">
                            <label className="label__text" for="story">Расскажите о себе:</label>
                            <textarea className="input__text area__text" id="story" name="story" rows="7" cols="3" placeholder="Рассекажите о себе" ref={this.story}></textarea>
                        </div>
                    </div>
                    <button className="btn btn__save" onClick={this.addInfo}>СОХРАНИТЬ</button>
                </div>

                <div>
                    <DataLook info={this.state.info} />
                </div>

            </div>
        )
    }
}