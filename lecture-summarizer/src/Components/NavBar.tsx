import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <div>

            <div>
                <h2>Lecture Summarizer</h2>
            </div>
            <div>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/how-it-works">How It Works</Link>
                </div>
                <div>
                    <Link to="/about">About</Link>
                </div>
                <div>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default NavBar
