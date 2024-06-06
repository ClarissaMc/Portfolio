import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderImage from './assets/home-header.svg';
import Resume from './assets/Clarissa-McCarthy-Resume.pdf';

const Header = ({ bgColor, fontColor, heading, subHeading }) => {
    return (
        <Container>
            <div className="header" style={{ backgroundImage: `url(${HeaderImage})`,
                backgroundSize: 'cover',
                backgroundColor: bgColor,
                color: fontColor
            }}>
                <Row className='fade-in'>
                    <Col lg="2"></Col>

                    <Col lg="5">
                        <Row>
                            <h1>{heading}</h1>
                        </Row>
                        <Row>
                            <h2>{subHeading}</h2>
                        </Row>
                        <Row style={{ justifyContent: "center" }}>
                            <button type="button" onClick={openResume} style={{ color: fontColor }}>
                                Resume
                            </button>
                            <button type="button" style={{ color: fontColor }}>
                                Contact Me
                            </button>
                        </Row>
                    </Col>

                    <Col lg="5"></Col>
                </Row>
                
            </div>
        </Container>
    );
};

const openResume = () => {
    var newWindow = window.open(Resume, "_blank");
    setTimeout(function() { newWindow.document.title = "Clarissa McCarthy Resume"; }, 100);
};

export { Header };