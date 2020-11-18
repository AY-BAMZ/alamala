import React, { useState }  from 'react'
import './Header.css'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from '../home/Home'

function Header() {
    const [count, setCount] = useState(1);
    return (
        <div>
            <div className='header'>
            <div className="headerLinks">
                <Row className='headerRow'>
                    <Col className='menuLinks' md={4}>
                        <h1>A<span>L</span>A<span>M</span>A<span>L</span>A</h1>
                    </Col>
                    <Col className='menuLinks' md={8}>
                        <ul className='navLinks '>
                            <li onClick={() => setCount(1)}><a className='active'>Foods</a></li>
                            <li onClick={() => setCount(2)}><a >Drinks</a></li>
                            <li onClick={() => setCount(3)}><a >Daily Menu</a></li>
                            <li onClick={() => setCount(4)}><a >Resturants</a></li>
                            <li onClick={() => setCount(5)}><a >Stories</a></li>
                            <li onClick={() => setCount(6)}><a >Videos</a></li>
                            <li onClick={() => setCount(7)}><a >Contact</a></li>
                        </ul>
                        <div className="orderTrack">
                            <FontAwesomeIcon className='menuIcons' icon={faSearch} />
                            <FontAwesomeIcon className='menuIcons' icon={faUser} />
                            <FontAwesomeIcon className='menuIcons' icon={faShoppingBasket} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        <div className="componentRender">
            <div>{count === 1 && <Home />}</div>
            <div>{count === 2 && <Home />}</div>
            <div>{count === 3 && <Home />}</div>
            <div>{count === 4 && <Home />}</div>
            <div>{count === 5 && <Home />}</div>
            <div>{count === 6 && <Home />}</div>
            <div>{count === 7 && <Home />}</div>
        </div>
        </div>
    )
}

export default Header
