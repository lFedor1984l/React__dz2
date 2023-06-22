import React, { Component } from "react";
import { Group } from "../group/group";
import './section_first.css';

export class SectionFirst extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <section className="info">
                    <div className="info__inner">
                        <div className="albom">
                            <div className="logo__albom">
                                <img className="logo" src={this.props.img} />
                            </div>
                            <div className="albom__desc">
                                <p className="albom__name albom__key">
                                    Испольнитель: <span className="albom__name-text">{this.props.name}</span>
                                </p>
                                <p className="albom__genre albom__key">
                                    Жанр: <span className="albom__name-text">{this.props.genre}</span>
                                </p>
                                <p className="albom__date albom__key">
                                    Год выпуска: <span className="albom__name-text">{this.props.date}</span> 
                                </p>
                            </div>
                        </div>
                        <div className="group">
                            {this.props.group.map(el => (
                                <Group key={el.id} group = {el} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}