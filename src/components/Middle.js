import React from 'react';
import Pin from '../assets/003-pin.svg';
import Flash from '../assets/004-flash.svg';
import Analytics from '../assets/005-analytics.svg';

export default function Middle() {
    return (
        <div className="middle_container" id="benefits">
            <div className="container">
                <h2>Mapping</h2>
                <img className="icon" src={Pin} alt="map pin" />
                <p>Easily view your network's ventilator <br/>supply on an interactive map.</p>
            </div>
            <div className="container">
                <h2>Real-Time Data</h2>
                <img src={Flash} className="icon" alt="lighting bolt" />
                <p>Changes in the registry are updated in real-time <br/> so you have the most current information.</p>
            </div>
            <div className="container">
                <h2>Analytic Tools</h2>
                <img src={Analytics} className="icon" alt="computer analysis" />
                <p>Search, filter and export data so you can <br/> better analyze your network's data.</p>
            </div>
        </div>
    )
}
