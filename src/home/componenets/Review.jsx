import React from 'react'
import './Review.css'
import { Row, Col } from 'react-bootstrap';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Review() {
    return (
        <div className='review'>
            <div className="coupon">
                <h1>Get Free Coupon Now</h1>
                <p>This will generate a list of websites that offer coupon codes. Shoppers can then visit the websites and compare the coupon savings that are available. The and compare the coupon savings that are available.</p>
                <Row className="couponRow">
                    <Col md={3} className="couponCol">
                        <div className="input">
                        <input type="text" placeholder='Your email'/>
                        <PersonOutlineIcon className='userIcon' />
                        </div>
                    </Col>
                    <Col md={3} className="couponCol">
                        <div className="input">
                        <input type="text" placeholder='Your name'/>
                        <PersonOutlineIcon className='userIcon' />
                        </div>
                    </Col>
                    <Col md={3} className="couponCol">
                        <button type='submit'>Subscribe now</button>
                    </Col>
                </Row>
                <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604631174/emy-XoByiBymX20-unsplash_n55nl4.jpg" alt=""/>
            </div>
            <div className="chefs">
                <h2>This month's chefs</h2>
                <Row className="chefsRow">
                    <Col md={3} className="chefsCol">
                        <div className="profile">
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604633242/wlzbkzr5nr4lgxdnnfdksz7knua9tebkpwfvhxdth3r1gqijqykkmvasufbnn7uz-_l1obir.jpg" alt=""/>
                            <div className="name">
                                <h3>Adigun Bigboss</h3>
                                <h6>Your best amala plug</h6>
                            </div>
                        </div>
                       <div className="stockImage">
                        <Row className="images">
                            <Col className='imagesCol' md={5}>
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604560513/We-Can-Prevent-Diseases-By-Eating-Local-Foods.dailyfamily.ng__f7xedf.jpg" alt=""/></Col>
                            <Col className='imagesCol' md={3}>
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604484609/pexels-alexy-almond-3756523_zewvna.jpg" alt=""/></Col>
                            <Col className='imagesCol' md={4}>
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604560512/slack-imgs.com-3_copy_2_wofmpp.jpg" alt=""/></Col>
                        </Row>
                        </div>
                    </Col>
                    <Col md={3} className="chefsCol">
                        <div className="profile">
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604633242/hrithik-roshan_jaaoqa.jpg" alt=""/>
                            <div className="name">
                                <h3>Olatola Sinzu</h3>
                                <h6>Your best amala plug</h6>
                            </div>
                        </div>
                       <div className="stockImage">
                        <Row className="images">
                            <Col className='imagesCol' md={5}>
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604560513/We-Can-Prevent-Diseases-By-Eating-Local-Foods.dailyfamily.ng__f7xedf.jpg" alt=""/></Col>
                            <Col className='imagesCol' md={3}>
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604484609/pexels-alexy-almond-3756523_zewvna.jpg" alt=""/></Col>
                            <Col className='imagesCol' md={4}>
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604560512/slack-imgs.com-3_copy_2_wofmpp.jpg" alt=""/></Col>
                        </Row>
                        </div>
                    </Col>
                    <Col md={3} className="chefsCol">
                        <div className="profile">
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604633242/TNwxo_dlagx8.jpg" alt=""/>
                            <div className="name">
                                <h3>Omoyele Sowore</h3>
                                <h6>Your best amala plug</h6>
                            </div>
                        </div>
                       <div className="stockImage">
                        <Row className="images">
                            <Col className='imagesCol' md={5}>
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604560513/We-Can-Prevent-Diseases-By-Eating-Local-Foods.dailyfamily.ng__f7xedf.jpg" alt=""/></Col>
                            <Col className='imagesCol' md={3}>
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604484609/pexels-alexy-almond-3756523_zewvna.jpg" alt=""/></Col>
                            <Col className='imagesCol' md={4}>
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604560512/slack-imgs.com-3_copy_2_wofmpp.jpg" alt=""/></Col>
                        </Row>
                        </div>
                    </Col>
                    <Col md={3} className="chefsCol">
                        <div className="profile">
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604633242/robert_pattinson_ju5u0o.jpg" alt=""/>
                            <div className="name">
                                <h3>Paul Ayobami</h3>
                                <h6>Your best amala plug</h6>
                            </div>
                        </div>
                       <div className="stockImage">
                        <Row className="images">
                            <Col className='imagesCol' md={5}>
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604560513/We-Can-Prevent-Diseases-By-Eating-Local-Foods.dailyfamily.ng__f7xedf.jpg" alt=""/></Col>
                            <Col className='imagesCol' md={3}>
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604484609/pexels-alexy-almond-3756523_zewvna.jpg" alt=""/></Col>
                            <Col className='imagesCol' md={4}>
                            <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604560512/slack-imgs.com-3_copy_2_wofmpp.jpg" alt=""/></Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Review
