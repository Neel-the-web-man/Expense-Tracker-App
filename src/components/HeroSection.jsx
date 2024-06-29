import React from 'react'
import "./HeroSection.css"
const HeroSection = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-sec-cont">
                    <h1>Your Personal Finance Assistant</h1>
                    <h2>Track expenses effortlessly
                        and reach your financial goals.</h2>
                    <h2>Achieve financial peace of mind
                        with our powerful expense tracker.
                    </h2>
                    <a href="#add-expense-form"><button>Get Started</button></a>
                </div>
                <div className="partition"></div>
                <img src="./src/assets/hero-sec-img4.jpg" alt="" />
            </div>
            <div  className="division"></div>
        </>
    )
}

export default HeroSection
