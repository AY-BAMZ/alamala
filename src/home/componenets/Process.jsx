import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Process.css'
import Svg1 from './svg/svg1.svg'
import Svg2 from './svg/svg2.svg'
import Svg3 from './svg/svg3.svg'
import Svg4 from './svg/svg4.svg'
import Svg5 from './svg/svg5.svg'

function Process() {
    return (
        <div className='process'>
            <Row className="processRow">
                <Col md={3} >
                    <div className="processCol">
                        <div className='processNumber'>
                            <h2>1</h2>
                        </div>
                        <div className=''>
                            <img src={Svg1} alt=""/>
                            <h1>Pick meals</h1>
                            <div className="underline"></div>
                            <p>we have numerous food and recipe websites but I was unable to find any website that offers local food, that is why I decided to create ALAMALA</p>
                        </div>
                    </div>
                </Col>
                <Col md={3} >
                    <div className="processCol">
                        <div className='processNumber'>
                            <h2>2</h2>
                        </div>
                        <div className=''>
                            <img src={Svg2} alt=""/>
                            <h1>Choose how often</h1>
                            <div className="underline"></div>
                            <p>we have numerous food and recipe websites but I was unable to find any website that offers local food, that is why I decided to create ALAMALA</p>
                        </div>
                    </div>
                </Col>
                <Col md={3} >
                    <div className="processCol">
                        <div className='processNumber'>
                            <h2>3</h2>
                        </div>
                        <div className=''>
                            <img src={Svg3} alt=""/>
                            <h1>Fast deliveries</h1>
                            <div className="underline"></div>
                            <p>we have numerous food and recipe websites but I was unable to find any website that offers local food, that is why I decided to create ALAMALA</p>
                        </div>
                    </div>
                </Col>
                <Col md={3} >
                    <div className="processCol">
                        <div className='processNumber'>
                            <h2>4</h2>
                        </div>
                        <div className=''>
                            <img src={Svg4} alt=""/>
                            <h1>Enjoy your meals</h1>
                            <div className="underline"></div>
                            <p>we have numerous food and recipe websites but I was unable to find any website that offers local food, that is why I decided to create ALAMALA</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="processRow1">
                <Col md={4} className="betterExp">
                    <h1>Better Experience With Mobile App</h1>
                    <p>we have numerous food and recipe websites but I was unable to find any website that offers local food, that is why I decided to create ALAMALA</p>
                    <button className="download" type='submit'>Download on app store</button>
                </Col>
                <Col md={5} className="mobileImage">
                    <img src={Svg5} alt=""/>
                </Col>
                <Col md={3} className="benefits">
                    <div className='benefitsPoint'>
                        <div className="point"></div>
                        <div>
                        <h1>No minimum order</h1>
                        <h6>Only the current stable and supported LTS releases are actively tested against. Please note that there may be an interval.</h6>
                        </div>
                    </div>
                    <div className='benefitsPoint'>
                        <div className="point"></div>
                        <div>
                        <h1>Foods for all crevings</h1>
                        <h6>Only the current stable and supported LTS releases are actively tested against. Please note that there may be an interval.</h6>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Process
