import React, { Component } from "react";
import './song.css';

export class Song extends Component {
    render() {
        return (
            <div className="song">
                <div className="song__box">
                    <img className="song__img" src = { this.props.songs.img} />
                    <div className="song__desk">
                        <div className="song__desk-box">
                            <h2 className="song__group">{this.props.songs.musician}</h2>
                            <p className="song__name">{this.props.songs.name}</p>
                        </div>
                        <p className="song__time">{this.props.songs.time}</p>
                    </div>
                </div>
            </div>
        )
    }
}