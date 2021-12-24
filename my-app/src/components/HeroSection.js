import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/video.mp4" autoPlay loop muted/>
            <h1>SLAVONIJA-ZLATO HRVATSKE </h1>
            <p>Dođite u zlatnu bajku!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    ZAPOČNI
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    POGLEDAJ TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
