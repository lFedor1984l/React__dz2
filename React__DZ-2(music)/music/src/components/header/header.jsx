import React, { Component } from "react";
import './header.css'

export class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="container">
                    <div className="header__inner">
                        <h1 className="header__title">AC-DC - Highway To Hell</h1>
                    </div>
                </div>
            </div>
        )
    }
}