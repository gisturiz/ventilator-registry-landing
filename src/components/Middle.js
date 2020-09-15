import React from 'react';
import Pin from '../assets/003-pin.svg';
import Flash from '../assets/004-flash.svg';
import Analytics from '../assets/005-analytics.svg';

export default function Middle() {
    return (
        <div className="middle_container">
            <div className="container">
                <h2>Geolocation</h2>
                <img src={Pin} alt="map pin" style={{ 'width': '35%' }} />
            </div>
            <div className="container">
                <h2>Real-Time Data</h2>
                <img src={Flash} alt="lighting bolt" style={{ 'width': '35%', 'color': 'blue' }} />
            </div>
            <div className="container">
                <h2>Analytic Tools</h2>
                <img src={Analytics} alt="computer analysis" style={{ 'width': '35%' }} />
            </div>
        </div>
    )
}
