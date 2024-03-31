import { Container } from "react-bootstrap"
import { Row, Col } from "react-bootstrap";
import logo from '../assets/img/favicon.png';
import navLinkedin from '../assets/img/linkedin.svg';
import navGithub from '../assets/img/github.svg';

export const Footer = () => {
    return (
        <footer className="footer background-img">
            <Container>
                <Row className="aLign-item-center">
                    <Col sm={6} className="logo-footer">
                        <img src={logo} alt="Logo" className="navbar-logo-footer"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon-footer">
                            <a href="https://www.linkedin.com/in/althéa-feuillet-81b7b717b/"><img src={navLinkedin} alt="linkedin"/></a>
                            <a href="https://github.com/altheaFeu"><img src={navGithub} alt="github"/></a>
                        </div>
                        <p>CopyRight 2024 Tout droits réservés</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}