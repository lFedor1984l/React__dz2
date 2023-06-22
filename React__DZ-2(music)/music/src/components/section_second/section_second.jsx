import React, { Component} from "react";
import { Song } from "../song/song";
import './section_second.css';

export class Songs extends Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     const audioEl = document.getElementsByClassName("audio-element")[0]
    //     audioEl.play()
    //   }

    render() {
        return(
            <section className="song">
                <div className="container">
                    <h2 className="song__title">ПЕСНИ</h2>
                    <div className="song">
                        {this.props.songs.map(el => (
                            <Song key={el.id} songs = {el} />
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}