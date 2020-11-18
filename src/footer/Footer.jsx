import React from 'react'
import './Footer.css'
import { Row, Col } from 'react-bootstrap';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
    return (
        <div className='footer'>
            <div className="footerDivider"></div>
            <Row className="footerRow">
                <Col md={3} className="footerCol">
                    <h1>Company</h1>
                    <div className="underline"></div>
                    <ul>
                        <li>About</li>
                        <li>Press</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Security</li>
                        <li>Driver center</li>
                    </ul>
                </Col>
                <Col md={3} className="footerCol">
                    <h1>Information</h1>
                    <div className="underline"></div>
                    <ul>
                        <li>Our story</li>
                        <li>Recipes</li>
                        <li>Nutritions</li>
                        <li>Resources</li>
                        <li>News letter</li>
                        <li>Deliveries</li>
                    </ul>
                </Col>
                <Col md={3} className="footerCol">
                    <h1>Contact</h1>
                    <div className="underline"></div>
                    <ul>
                        <li>Customer service</li>
                        <li>Recommend a resturant</li>
                        <li>Signup a resturant</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Term of use</li>
                    </ul>
                </Col>
                <Col md={3} className="footerCol">
                    <h1>Subscribe now</h1>
                    <div className="underline"></div>
                    <div className="input">
                        <input type="text" placeholder='Your email'/>
                        <PersonOutlineIcon className='userIcon' />
                    </div>
                    <button type='submit'>Subscribe now</button>
                </Col>
            </Row>
            <div className="footerDivider"></div>
            <div className="privacy">
                <h5><CopyrightIcon /> 2020 Awesome Impresions. Designed and Developed by BAMZZ DESIGN to solve the problem of local food. All rights reserved.</h5>
                <div className="terms">
                    <h5>Terms of Service</h5>
                    <h5>Privacy Policy</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer
