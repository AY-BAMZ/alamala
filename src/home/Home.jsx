import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faSearch } from '@fortawesome/free-solid-svg-icons'
import Featured from './componenets/Featured.jsx'
import Process from './componenets/Process';
import Review from './componenets/Review';

function Home() {
    return (
        <div className='home'>
            <Row className='homeRow'>
                <Col className='homeWelcome' md={4}>
                    <h1>Your favourite food delivered hot & fresh</h1>
                    <p>While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline.</p>
                    <button type='submit'>Explore all</button>
                </Col>
                <Col className='homeCover' md={8}>
                </Col>
            </Row>

            <div className="navSearch">
                <div className="search">
                    <input type="text" placeholder='search here...'/>
                    <FontAwesomeIcon className='searchOptionsIcon' icon={faSearch} />
                </div>
                <h2>Trending</h2>
                <ul>
                    <li className="searchFilter">All</li>
                    <li className="searchFilter active">Featured</li>
                    <li className="searchFilter">Quick</li>
                    <li className="searchFilter">Vegan</li>
                    <li className="searchFilter">Healthy</li>
                    <li className="searchFilter">Premium</li>
                </ul>
                <div className="moreOption">
                    <FontAwesomeIcon className="moreOptions" icon={faEllipsisH} />
                </div>
            </div>
            <Featured />
            <div></div>
            <Process />
            <Review />
        </div>
    )
}

export default Home
