import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import arcgisImg from '../assets/img/Skills/sig/arcgis.png';
import olImg from '../assets/img/Skills/sig/openlayers.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {
    useEffect(() => {
        AOS.init({duration : 2000});
    }, [])

    return (
        <section className="skill background-img" id="skills">
        <Container>

            {/* Expériences avec les SIG */}
            <div className="skill-bx wow zoomIn">
                <Row>
                    <h2>Expériences en SIG</h2>
                    <p>Grâce à mes études, à mes projets et à plusieurs années d'expériences dans le domaine de la géomatique,<br/>
                        je maîtrise les outils de Systèmes d'Information Géographique (SIG)<br/>
                        et les serveurs destinés à la cartographie</p>
                </Row>

                <Row className="image-row">
                <Col>
                    <a href="https://www.qgis.org/fr/site/" target="_blank" rel="noreferrer">
                        <img src="https://www.qgis.org/fr/_images/main_logo.png" alt="qis" data-aos="fade-up"/>
                    </a>
                </Col>
                <Col>
                    <a href="https://www.arcgis.com/index.html" target="_blank" rel="noreferrer">
                        <img src={arcgisImg} alt="arcgis" style={{ width: "150px" }} data-aos="fade-up"/>
                    </a>
                </Col>
                <Col>
                    <a href="https://openlayers.org" target="_blank" rel="noreferrer">
                        <img src={olImg} alt="openlayers" style={{ width: "130px" }} data-aos="fade-up"/>
                    </a>
                </Col>
                <Col>
                    <a href="https://geoserver.org/" target="_blank" rel="noreferrer">
                        <img src="https://incom.tomsk.ru/upload/iblock/183/18321267d96e5472247a0d4ffd079ed5.png" alt="geoserver" style={{ width: "150px" }} data-aos="fade-up" />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.lizmap.com/" target="_blank" rel="noreferrer">
                        <img data-aos="fade-up" src="https://www.3liz.com/images/logo-lizmap.png" alt="lizmap" style={{ width: "100px" }} />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.veremes.com/produits/fme/fme-form" target="_blank" rel="noreferrer">
                        <img data-aos="fade-up" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/FME_Software_Logo.svg/1280px-FME_Software_Logo.svg.png" alt="fme" />
                    </a>
                </Col>
                </Row>

                {/* Expériences avec les languages de programmation */}
                <Row style={{ marginTop: "20px"}}>
                    <h2>Languages et Frameworks</h2>
                </Row>

                <Row className="image-row">
                <Col>
                    <a href="https://www.python.org" target="_blank" rel="noreferrer"> 
                        <img data-aos="zoom-in" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" 
                        alt="python" style={{ width: "100px" }} /> 
                    </a> 
                </Col>
                <Col>
                    <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"> 
                        <img data-aos="zoom-in" src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" style={{ width: "70px" }} />
                    </a>  
                </Col>
                <Col>
                    <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> 
                        <img data-aos="zoom-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png" 
                        alt="bootstrap" style={{ width: "100px" }} /> 
                    </a>
                </Col>
                <Col>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> 
                        <img data-aos="zoom-in" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" 
                        alt="tailwind" style={{ width: "100px" }}/> 
                    </a>
                </Col>
                <Col>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
                        <img data-aos="zoom-in" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
                        alt="javascript" style={{ width: "80px" }} /> 
                    </a> 
                </Col>
                <Col>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
                        <img data-aos="zoom-in" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" 
                        alt="react" style={{ width: "100px" }}/> 
                    </a>
                </Col>
                <Col>
                    <a href="https://www.php.net" target="_blank" rel="noreferrer"> 
                        <img data-aos="zoom-in" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" 
                        alt="php" style={{ width: "100px" }} /> 
                    </a>
                </Col>
                </Row>

                {/* Bases de données */}
                <Row style={{ marginTop: "20px"}}>
                    <h2>Bases de données</h2>
                </Row>

                <Row className="image-row">
                <Col>
                    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
                        <img data-aos="fade-down" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" 
                        alt="mysql" style={{ width: "100px" }}/> 
                    </a> 
                </Col>
                <Col>
                    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> 
                        <img data-aos="fade-down" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" 
                        alt="postgresql" style={{ width: "100px" }}/> 
                    </a> 
                </Col>
                <Col>
                    <a href="https://dbeaver.io/" target="_blank" rel="noreferrer"> 
                        <img data-aos="fade-down" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dbeaver/dbeaver-original.svg" 
                        alt="dbeaver" style={{ width: "100px" }}/> 
                    </a>  
                </Col>

                <Col>
                    <a href="https://postgis.net/" target="_blank" rel="noreferrer"> 
                        <img data-aos="fade-down" src="https://upload.wikimedia.org/wikipedia/en/6/60/PostGIS_logo.png" 
                        alt="postgis" style={{ width: "100px" }}/> 
                    </a> 
                </Col>
                </Row>
            </div>
            
        </Container>
        </section>
    );
};

export default Skills;