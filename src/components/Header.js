import React from 'react'

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-overlay">
                <div className="navbar">
                    <a href="https://ventilator-registry.now.sh/" target="_blank" rel="noopener noreferrer">Demo</a>
                    <a href="b">About Us</a>
                    <a href="c">FAQ</a>
                </div>
                <div className="call_to_action">
                    <h1 style={{fontSize: '3.5rem'}}>Ventilator Registry</h1>
                    <p style={{fontSize: '1.5rem', lineHeight: '2rem'}}>An open-source ventilator registry free to <br/> download and use.</p>
                    <button onClick={(e) => {e.preventDefault(); window.location.href='https://ventilator-registry.now.sh/'}}>See Demo</button>
                </div>
            </div>
        </div>
    )
}
