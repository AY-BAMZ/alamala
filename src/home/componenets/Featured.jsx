import React from 'react'
import './Featured.css'
import { Row, Col } from 'react-bootstrap';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Featured() {
    return (
        <div className='featured'>
            <Row className="featuredRow">
                <Col md={3} >
                    <div className='featuredCol'>
                    <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600344105/food-plates-wooden-surface-still-life-wallpaper_aq5oql.jpg" alt=""/>
                    <h3>Featured meal</h3>
                    <p>Note that both techniques achieve</p>
                    <h5>bcrypt uses whatever Promise implementation is available in global.Promise. NodeJS  0.12 has a native Promise implementation.</h5>
                    <div className="postShare">
                        <Col md={6}><BookmarkBorderIcon className='featureSave'/></Col>
                        <Col className='features' md={6}><div className='featureAction'><FavoriteBorderIcon className='featureLike'/><h6>214</h6></div>
                        <div className='featureAction'><ChatBubbleOutlineIcon className='featureComment'/><h6>214</h6></div></Col>
                    </div>
                    </div>
                </Col>
                <Col md={3} >
                    <div className='featuredCol'>
                    <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600344100/thanksgiving-dinner-plate-400x400_iekgg9.jpg" alt=""/>
                    <h3>Featured meal</h3>
                    <p>Note that both techniques achieve</p>
                    <h5>bcrypt uses whatever Promise implementation is available in global.Promise. NodeJS  0.12 has a native Promise implementation.</h5>
                    <div className="postShare">
                        <Col md={6}><BookmarkBorderIcon className='featureSave'/></Col>
                        <Col className='features' md={6}><div className='featureAction'><FavoriteBorderIcon className='featureLike'/><h6>214</h6></div>
                        <div className='featureAction'><ChatBubbleOutlineIcon className='featureComment'/><h6>214</h6></div></Col>
                    </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='specialFeatured'>
                    <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600314471/pexels-nadezhda-moryak-4409250_bw3ame.jpg" alt=""/>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='specialFeature'>
                    <h1>Featured meal</h1>
                    <p>Note that both techniques achieve</p>
                    <h5>bcrypt uses whatever Promise implementation is available in global.Promise. NodeJS  0.12 has a native Promise implementation.</h5>
                    <div className='specialImage' >
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600344100/thanksgiving-dinner-plate-400x400_iekgg9.jpg" alt=""/>
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600344100/download_1_uiffkf.jpg" alt=""/>
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600344104/64474926-top-down-view-on-oblong-shaped-plate-with-steak-dinner-includes-side-servings-of-broccoli-grilled-po_r3xbud.jpg" alt=""/>
                    </div>
                    <div className="exploreSpecial">
                        <button type='submit'>Order now</button>
                        <div className='exploreMore'><MoreHorizIcon className='exploreButton'/></div>
                    </div>
                    <div className="postShare">
                        <Col md={6}><BookmarkBorderIcon className='featureSave'/></Col>
                        <Col className='features' md={6}><div className='featureAction'><FavoriteBorderIcon className='featureLike'/><h6>214</h6></div>
                        <div className='featureAction'><ChatBubbleOutlineIcon className='featureComment'/><h6>214</h6></div></Col>
                    </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='specialFeatured'>
                    <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600344100/images_tbc71a.jpg" alt=""/>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='specialFeature'>
                    <h1>Featured meal</h1>
                    <p>Note that both techniques achieve</p>
                    <h5>bcrypt uses whatever Promise implementation is available in global.Promise. NodeJS  0.12 has a native Promise implementation.</h5>
                    <div className='specialImage' >
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600344100/thanksgiving-dinner-plate-400x400_iekgg9.jpg" alt=""/>
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600344100/download_1_uiffkf.jpg" alt=""/>
                        <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600344104/64474926-top-down-view-on-oblong-shaped-plate-with-steak-dinner-includes-side-servings-of-broccoli-grilled-po_r3xbud.jpg" alt=""/>
                    </div>
                    <div className="exploreSpecial">
                        <button type='submit'>Order now</button>
                        <div className='exploreMore'><MoreHorizIcon className='exploreButton'/></div>
                    </div>
                    <div className="postShare">
                        <Col md={6}><BookmarkBorderIcon className='featureSave'/></Col>
                        <Col className='features' md={6}><div className='featureAction'><FavoriteBorderIcon className='featureLike'/><h6>214</h6></div>
                        <div className='featureAction'><ChatBubbleOutlineIcon className='featureComment'/><h6>214</h6></div></Col>
                    </div>
                    </div>
                </Col>
                <Col md={3} >
                    <div className='featuredCol'>
                    <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600344103/image_kmig9q.jpg" alt=""/>
                    <h3>Featured meal</h3>
                    <p>Note that both techniques achieve</p>
                    <h5>bcrypt uses whatever Promise implementation is available in global.Promise. NodeJS  0.12 has a native Promise implementation.</h5>
                    <div className="postShare">
                        <Col md={6}><BookmarkBorderIcon className='featureSave'/></Col>
                        <Col className='features' md={6}><div className='featureAction'><FavoriteBorderIcon className='featureLike'/><h6>214</h6></div>
                        <div className='featureAction'><ChatBubbleOutlineIcon className='featureComment'/><h6>214</h6></div></Col>
                    </div>
                    </div>
                </Col>
                <Col md={3} >
                    <div className='featuredCol'>
                    <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600344100/untitled-1-500x500_lppj05.jpg" alt=""/>
                    <h3>Featured meal</h3>
                    <p>Note that both techniques achieve</p>
                    <h5>bcrypt uses whatever Promise implementation is available in global.Promise. NodeJS  0.12 has a native Promise implementation.</h5>
                    <div className="postShare">
                        <Col md={6}><BookmarkBorderIcon className='featureSave'/></Col>
                        <Col className='features' md={6}><div className='featureAction'><FavoriteBorderIcon className='featureLike'/><h6>214</h6></div>
                        <div className='featureAction'><ChatBubbleOutlineIcon className='featureComment'/><h6>214</h6></div></Col>
                    </div>
                    </div>
                </Col>
                <Col md={3} >
                    <div className='featuredCol'>
                    <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1600425941/69242897-set-of-various-plates-of-food-isolated-on-white-background_ukvmxb.jpg" alt=""/>
                    <h3>Featured meal</h3>
                    <p>Note that both techniques achieve</p>
                    <h5>bcrypt uses whatever Promise implementation is available in global.Promise. NodeJS  0.12 has a native Promise implementation.</h5>
                    <div className="postShare">
                        <Col md={6}><BookmarkBorderIcon className='featureSave'/></Col>
                        <Col className='features' md={6}><div className='featureAction'><FavoriteBorderIcon className='featureLike'/><h6>214</h6></div>
                        <div className='featureAction'><ChatBubbleOutlineIcon className='featureComment'/><h6>214</h6></div></Col>
                    </div>
                    </div>
                </Col>
                <Col md={3} >
                    <div className='featuredCol'>
                    <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604560408/ofada-sauce1_yolbev.jpg" alt=""/>
                    <h3>Featured meal</h3>
                    <p>Note that both techniques achieve</p>
                    <h5>bcrypt uses whatever Promise implementation is available in global.Promise. NodeJS  0.12 has a native Promise implementation.</h5>
                    <div className="postShare">
                        <Col md={6}><BookmarkBorderIcon className='featureSave'/></Col>
                        <Col className='features' md={6}><div className='featureAction'><FavoriteBorderIcon className='featureLike'/><h6>214</h6></div>
                        <div className='featureAction'><ChatBubbleOutlineIcon className='featureComment'/><h6>214</h6></div></Col>
                    </div>
                    </div>
                </Col>
                <Col md={3} >
                    <div className='featuredCol'>
                    <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604560512/slack-imgs.com-3_copy_2_wofmpp.jpg" alt=""/>
                    <h3>Featured meal</h3>
                    <p>Note that both techniques achieve</p>
                    <h5>bcrypt uses whatever Promise implementation is available in global.Promise. NodeJS  0.12 has a native Promise implementation.</h5>
                    <div className="postShare">
                        <Col md={6}><BookmarkBorderIcon className='featureSave'/></Col>
                        <Col className='features' md={6}><div className='featureAction'><FavoriteBorderIcon className='featureLike'/><h6>214</h6></div>
                        <div className='featureAction'><ChatBubbleOutlineIcon className='featureComment'/><h6>214</h6></div></Col>
                    </div>
                    </div>
                </Col>
                <Col md={3} >
                    <div className='featuredCol'>
                    <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604560513/We-Can-Prevent-Diseases-By-Eating-Local-Foods.dailyfamily.ng__f7xedf.jpg" alt=""/>
                    <h3>Featured meal</h3>
                    <p>Note that both techniques achieve</p>
                    <h5>bcrypt uses whatever Promise implementation is available in global.Promise. NodeJS  0.12 has a native Promise implementation.</h5>
                    <div className="postShare">
                        <Col md={6}><BookmarkBorderIcon className='featureSave'/></Col>
                        <Col className='features' md={6}><div className='featureAction'><FavoriteBorderIcon className='featureLike'/><h6>214</h6></div>
                        <div className='featureAction'><ChatBubbleOutlineIcon className='featureComment'/><h6>214</h6></div></Col>
                    </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Featured
