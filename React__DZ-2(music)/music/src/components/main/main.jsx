import React, { Component } from "react";
import './main.css'
import { SectionFirst } from "../section_first/section_first";
import { Songs } from "../section_second/section_second";

export class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            group: [
                {
                    id: 1,
                    img: "https://alternatingcurrentdirectcurrent.files.wordpress.com/2013/05/angusyoung1.jpg",
                    name: "Angus Young",
                    skils: "соло-гитара, иногда исполняет бэк-вокал"
                },

                {
                    id: 2,
                    img: "https://alternatingcurrentdirectcurrent.files.wordpress.com/2013/05/601px-brian_johnson.jpg",
                    name: "Brian Johnson",
                    skils: "ведущий вокал"
                },

                {
                    id: 3,
                    img: "https://avatars.mds.yandex.net/i?id=d9f3b47eccd296c8b6ebf12c5665c19c7ca6a2c9-9228005-images-thumbs&n=13",
                    name: "Phil Rudd",
                    skils: "барабаны, перкуссия"
                },

                {
                    id: 4,
                    img: "https://avatars.mds.yandex.net/i?id=8f5fbcf4db9196232bb8a3b111ca931cd59642da-7062428-images-thumbs&n=13",
                    name: "Cliff Williams",
                    skils: "бас-гитара, бэк-вокал"
                },

                {
                    id: 5,
                    img: "https://allfamousbirthday.com/wp-content/cache/thumbnails/2021/07/stevie-young-300x300-c.jpg",
                    name: "Stevie Young",
                    skils: "ритм-гитара, бэк-вокал"
                }
            ],

            songs: [
                {
                    id: 1,
                    musician: "AC/DC",
                    name: "Love Hungry Man",
                    img: "https://rocknation.su/upload/images/albums/8.jpg",
                    time: "04:15"
                },

                {
                    id: 2,
                    musician: "AC/DC",
                    name: "Touch Too Much",
                    img: "https://rocknation.su/upload/images/albums/8.jpg",
                    time: "04:15"
                },

                {
                    id: 3,
                    musician: "AC/DC",
                    name: "Night Prowler",
                    img: "https://rocknation.su/upload/images/albums/8.jpg",
                    time: "04:15"
                },

                {
                    id: 4,
                    musician: "AC/DC",
                    name: "Walk All Over You",
                    img: "https://rocknation.su/upload/images/albums/8.jpg",
                    time: "04:15"
                },

                {
                    id: 5,
                    musician: "AC/DC",
                    name: "Get It Hot",
                    img: "https://rocknation.su/upload/images/albums/8.jpg",
                    time: "04:15"
                },

                {
                    id: 6,
                    musician: "AC/DC",
                    name: "Girls Got Rhythm",
                    img: "https://rocknation.su/upload/images/albums/8.jpg",
                    time: "04:15"
                },

                {
                    id: 7,
                    musician: "AC/DC",
                    name: "If You Want Blood (You've Got It)",
                    img: "https://rocknation.su/upload/images/albums/8.jpg",
                    time: "04:15"
                },

                {
                    id: 8,
                    musician: "AC/DC",
                    name: "Beating Around The Bush",
                    img: "https://rocknation.su/upload/images/albums/8.jpg",
                    time: "04:15"
                },

                {
                    id: 9,
                    musician: "AC/DC",
                    name: "Highway To Hell",
                    img: "https://rocknation.su/upload/images/albums/8.jpg",
                    time: "04:15"
                }
            ]
        };
    };
    render() {
        return (
            <div className="main">
                <SectionFirst
                    img="https://static.mp3xa.me/album_images/400x400/acdc-highway-to-hell.jpg"
                    name="AC/DC"
                    genre="Hard-Rock"
                    date={1979}

                    group = {this.state.group}
                />
                <Songs
                    songs = {this.state.songs}
                />
            </div>
        )
    }
}