import React, { Component} from "react";
import './group.css'

export class Group extends Component {
    render() {
        return (
            <div className="item">
                <img className="item__img" src = { this.props.group.img} />
                <div className="item__desk">
                    <h2 className="item__title">{this.props.group.name}</h2>
                    <p className="item__text">{this.props.group.skils}</p>
                </div>
            </div>
        )
    }
}