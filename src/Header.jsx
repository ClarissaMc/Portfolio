import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderImage from './assets/home-header.svg';

const Header = ({ bgColor, fontColor, heading, subHeading, text }) => {
    return (
        <Container>
            <div className="header" style={{ backgroundImage: `url(${HeaderImage})`,
                backgroundSize: 'cover',
                backgroundColor: bgColor,
                color: fontColor
            }}>
                <Row>
                    <Col lg="2"></Col>

                    <Col lg="5">
                        <Row>
                            <h1>{heading}</h1>
                        </Row>
                        <Row>
                            <h2>{subHeading}</h2>
                        </Row>
                        <Row>
                            <h5>{text}</h5>
                        </Row>
                    </Col>

                    <Col lg="5"></Col>
                </Row>
                
            </div>
        </Container>
    );
}

export { Header };