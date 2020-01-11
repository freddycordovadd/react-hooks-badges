import React from 'react'
import './styles/badge.css';


function badge(props) {
    return (
        <div className="Badge mt-3">
            <div className="Badge__header">
                <h1>React Badge 👇</h1>
            </div>

            <div className="Badge__section-name">
                <img
                    className="Badge__avatar"
                    src="https://i.redd.it/6giqv6zjkog21.jpg"
                    alt="Avatar"
                />
                <h1>
                    {props.firstName} <br /> {props.lastName}
                </h1>
            </div>

            <div className="Badge__section-info">
                <h3>{props.company}</h3>
                <div>Twitter: @{props.twitter}</div>
            </div>

            <div className="Badge__footer">#Reactjs</div>
        </div>
    )
}

export default badge
