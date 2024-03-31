import { Row, Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import navGithub from '../assets/img/github.svg';

// Pour la vendée des globes
import vendeeDashboard from '../assets/img/Projects/vendee/dashboard.png';
import vendeeWebApp from '../assets/img/Projects/vendee/webApp.gif';

// Pour mon stage au PNR de Brière 
import traitements from '../assets/img/Projects/pnr/traitements.jpg';
import jussie from '../assets/img/Projects/pnr/abondance-jussie.png';
import ndvi from '../assets/img/Projects/pnr/NDVI.png';
import ndwi from '../assets/img/Projects/pnr/NDWI.png';

// Pour le plugin QGIS 
import creationMap from '../assets/img/Projects/pyqgis/creationMap.png';
import creationMapResult from '../assets/img/Projects/pyqgis/creationMapResult.png';

// Pour Django
import djangoImg from '../assets/img/Projects/django/djangoImg.png';

// Pour lizmap
import lizmapTour from '../assets/img/Projects/lizmap/lizmap-presentation.gif';
import lizmapTooltip from '../assets/img/Projects/lizmap/tooltip.png';

// Pour julia
import evolutionSO from '../assets/img/Projects/julia/evolution_standing_ovation.png';
import mapSO from '../assets/img/Projects/julia/folium-map.png';
import videoSO from '../assets/img/Projects/julia/standing_ovation.gif';

export const Projects = () => {

    return(
        <section className="project background-img" id="projects">
            <Tab.Container>
                <div className="project-bx">
                    <Col>
                        <Row>
                            <h2 className="project-title">Projets</h2>
                            <p>Au cours de mes 2 années d'alternance, j'ai réalisé plusieurs projets en JS, PHP et Python,<br/>mais aussi des projets originaux dans des langages comme Julia</p>
                            <div className="text-pink-arrow">
                                <p className="text-pink">Appuyez sur un bouton pour voir le projet</p>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </div>

                            <Nav variant="pills" defaultActiveKey="/home" className="project-nav-link">
                                <Nav.Item className="rounded-left">
                                    <Nav.Link eventKey="vendee">Vendée des globes</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="pnr">
                                    <Nav.Link eventKey="pnr">PNR de Brière</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="pyqgis">Plugin de densité</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="django">Django</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="lizmap">Lizmap</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="rounded-right">
                                    <Nav.Link eventKey="julia">Standing Ovation</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Row>
                        <Row>
                            <Tab.Content>
                                <Tab.Pane eventKey="vendee">
                                        <div>
                                            <div className="content-box">
                                                <h4>Web App de la Vendée des Globes 2021</h4>
                                                <p>
                                                    Outre les nombreux projets que j'ai réalisés sur <span>ArcGIS Desktop</span> et <span>ArcGIS Online</span>, j'ai eu l'occasion de produire <br/>
                                                    une application cartographique de la <span>Vendée des Globes</span> en utilisant <span>ArcGIS Web AppBuilder</span> et <span>ArcGIS Dashboard</span>. <br/>
                                                    Les données ont été récupérées grâce à un outil de web scraping et ont été pré-traitées avec <span>Python</span>.<br/><br/>
                                                    J'ai aussi eu l'occasion d'utiliser l'outil <span>ArcGIS StoryMaps</span> pendant le concours des <span>24h du SIG 2023 d'ESRI</span>. <br/>
                                                    Le sujet était sur la liberté de la presse en Grèce.
                                                </p>
                                                <div className="imageContainer-bottom arrowContainer">
                                                    <div className="divArrow">
                                                        <p className="githubArrow">Web AppBuilder</p>
                                                        <FontAwesomeIcon icon={faArrowDown} className="arrowProject" />
                                                        <img className="webAppBuilder" data-aos="zoom-in" src={vendeeWebApp} alt="Web App Builder"/>
                                                    </div>
                                                    <div className="divArrow dashboard">
                                                        <p className="githubArrow">Dashboard</p>
                                                        <FontAwesomeIcon icon={faArrowDown} className="arrowProject" />
                                                        <img className="vendeeDashboard" data-aos="zoom-in" src={vendeeDashboard} alt="Dashboard de la vendée des globes"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="pnr">
                                    <Row>
                                        <div>
                                            <div className="content-box pnr">
                                            <h4>Conception d'une Application Cartographique pour le PNR de Brière</h4>
                                                <div className="block-container">
                                                    <div>
                                                        <img data-aos="zoom-in" src={traitements} alt="Traitements réalisés" className="traitementsPNR"/> 
                                                    </div>
                                                    <div>
                                                        <p>
                                                            Pendant mon stage à l'Agrocampus Ouest de Rennes, j'ai été chargé de la réalisation d'un site web cartographique pour
                                                            visualiser l'évolution de 2 plantes invasives (la jussie et la crassule) au sein du Parc Naturel de Brière. Les zones ont
                                                            été repérés grâce à une classification Random Forest et Support Vector Machine d'images Sentinel-2. 
                                                            Les données sont mises à jour et sauvegarder sur le <span>geoserver</span> du projet, et ont été publié grâce à <span>Mviewer</span>,
                                                            une plateforme cartographique développée par GéoBretagne.<br/>
                                                            L'application comporte les zones envahies par les espèces invasives sur plusieurs années, mais aussi des indices de végétation 
                                                            (comme le NDVI) ou des indices de présence d'eau (comme le NDWI).
                                                        </p>
                                                        <p>
                                                            Pour en savoir plus sur ce projet, vous pouvez visiter mon github : 
                                                            <a href="https://github.com/altheaFeu/jussie-crassule-detection">
                                                                <img src={navGithub} alt="github"/>
                                                            </a>    
                                                        </p>
                                                    </div>
                                                </div>
                                                <Carousel className="carouselPNR" touch={true} wrap={true}>
                                                    <Carousel.Item>
                                                        <img src={jussie} className="jussieImage" alt="Abondance de la Jussie sur le Parc Naturel de Brière" />
                                                        <Carousel.Caption className="caption-below">
                                                            <h3>Abondance de la Jussie sur le Parc Naturel de Brière</h3>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img src={ndvi} alt="Normalized Difference Vegetation Index (ou NDVI)" />
                                                        <Carousel.Caption className="caption-below">
                                                            <h3>Normalized Difference Vegetation Index (ou NDVI)</h3>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img src={ndwi} alt="Normalized Difference Water Index (ou NDWI)" />
                                                        <Carousel.Caption className="caption-below">
                                                            <h3>Normalized Difference Water Index (ou NDWI)</h3>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                        </div>
                                    </Row>
                                    
                                </Tab.Pane>
                                <Tab.Pane eventKey="pyqgis">
                                    <Row>
                                        <div>
                                            <div className="content-box pyqgis">
                                                <h4>Plugin QGIS d'une carte de la densité de la population</h4>
                                                <p>
                                                    Mon expérience m'a déjà conduit à développer plusieurs plugins avec <span>PyQGIS</span>.<br/>
                                                    Ce plugin a été spécifiquement conçu pour créer des cartes représentant la densité de la population par commune,
                                                    en exploitant un identifiant commun entre les données de population et celles des communes.
                                                </p>
                                                <p>
                                                    Pour en savoir plus sur ce projet, vous pouvez visiter mon github : 
                                                    <a href="https://github.com/altheaFeu/plugin-qgis-creationmap">
                                                        <img src={navGithub} alt="github"/>
                                                    </a>    
                                                </p>
                                                <div className="imageContainer-bottom">
                                                    <img className="creationMap" data-aos="zoom-in" src={creationMap} alt="Création d'un plugin qgis"/> 
                                                    <img className="creationMapResult" data-aos="zoom-in" src={creationMapResult} alt="Résultat plugin qgis"/> 
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="django">
                                    <Row>
                                    <div>
                                        <div className="content-box django">
                                            <h4>Web App avec Django</h4>
                                            <p>
                                                Grâce à l'intégration du framework <span>Django</span> et de la librairie <span>Folium</span>, j'ai développé une application web cartographique qui<br/> 
                                                offre une représentation visuelle des hôpitaux, des communes pour chaque région.<br/>
                                                Elle génère aussi des pavés hexagonaux en fonction de la résolution choisi par l'utilisateur. <br/>
                                                Ce projet a été réalisé dans le cadre du <span>cours "Animation dynamique et carto"</span>.
                                            </p>
                                            <p>
                                                Pour en savoir plus sur ce projet, vous pouvez visiter mon github : 
                                                <a href="https://github.com/altheaFeu/django-folium-app">
                                                    <img src={navGithub} alt="github"/>
                                                </a>    
                                            </p>
                                            <img className="djangoImg" data-aos="zoom-in" src={djangoImg} alt="Web app avec django"/>
                                        </div>
                                    </div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="lizmap">
                                    <Row>
                                        <div>
                                            <div className="content-box lizmap">
                                                <h4>Contributions à Lizmap</h4>
                                                <p>
                                                    <span>Lizmap</span> est un projet Open Source qui facilite la publication de cartes en ligne à partir d'un projet <span>QGIS</span>. <br/>
                                                    Au cours de mon alternance, j'ai eu l'opportunité de développer des applications pour la sûreté en utilisant <span>Lizmap</span>. <br/>
                                                    Mais j'ai aussi aider au développement de projets Lizmap en apportant ma contribution sur 
                                                    <a className="lizmap-github" href="https://github.com/3liz/lizmap-javascript-scripts">
                                                        Github
                                                    </a>.
                                                </p>
                                                <div className="imageContainer-bottom arrowContainer">
                                                    <div className="divArrow">
                                                        <a className="githubArrow" href="https://github.com/altheaFeu/lizmap-javascript-scripts/tree/tour-guide/library/ui/driver_tutorial">
                                                            Tour intéractif
                                                        </a>
                                                        <FontAwesomeIcon icon={faArrowDown} className="arrowProject" />
                                                        <img className="lizmapTour" data-aos="zoom-in" src={lizmapTour} alt="Lizmap tour"/>
                                                    </div>
                                                    <div className="divArrow">
                                                        <a className="githubArrow" href="https://github.com/altheaFeu/lizmap-javascript-scripts/tree/tooltip-branch/library/ui/tooltip">
                                                            Tooltip
                                                        </a> 
                                                        <FontAwesomeIcon icon={faArrowDown} className="arrowProject" />
                                                        <img className="lizmapTooltip" data-aos="zoom-in" src={lizmapTooltip} alt="Résultat tooltip lizmap"/>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="julia">
                                    <Row>
                                        <div>
                                            <div className="content-box julia">
                                                <h4>Standing Ovation avec Julia</h4>
                                                <p>
                                                    Mon expérience m'a permis de réaliser des projets originaux avec des langages de programmation peu connus comme 
                                                    <a href="https://docs.julialang.org/en/v1/" className="hrefJulia"><span>Julia</span></a>.<br/>
                                                    Le Standing Ovation est un modèle Agent qui simule la réaction d'un public après un spectacle. <br/>
                                                    Les agents ont la possibilité de se lever (orange), de rester assis (bleu), ou de changer de position.<br/>
                                                    Il est possible de modifier les paramètres de ce modèle comme la probabilité qu'un agent se lève<br/> 
                                                    pour simuler des comportements ou des mouvements.
                                                </p>
                                                <p>
                                                    Pour en savoir plus sur ce projet, vous pouvez visiter mon github : 
                                                    <a href="https://github.com/altheaFeu/standingOvation">
                                                        <img src={navGithub} alt="github"/>
                                                    </a>    
                                                </p>
                                                <Carousel className="carouselJulia" touch={true} wrap={true}>
                                                    <Carousel.Item>
                                                        <img src={videoSO} alt="Vidéo du Standing Ovation" />
                                                        <Carousel.Caption className="caption-below">
                                                            <h3>Visualisation du standing Ovation</h3>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img src={evolutionSO} alt="Evolution du Standing Ovation" />
                                                        <Carousel.Caption className="caption-below">
                                                            <h3>Evolution du Standing Ovation</h3>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img src={mapSO} alt="Cartographie des individus" />
                                                        <Carousel.Caption className="caption-below">
                                                            <h3>Cartographie des individus après la première phase du Standing Ovation</h3>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                        </div>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Row>
                    </Col>
                </div>
            </Tab.Container>
        </section>
    )
};

export default Projects;
