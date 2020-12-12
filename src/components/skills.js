import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import { Line } from 'rc-progress';
import Skill from './skill';

import solve from '../images/logos/solve.png'
import speed from '../images/logos/speed.png'
import responsive from '../images/logos/responsive.png'




const Skills = () => {
    return(
        <Container className="text-center">
            <div id="skills" className="py-3">
                <h1 className="h1-responsive fw-b my-3">Skills</h1>
                <Row className="mb-5">
                    <Col className="justify-content-center" lg>
                        <Image src={speed} rounded className="p-3"/>
                        <h5 className="h5-responsive fw-sb">Speed is my priority</h5>
                        <p className="lead fw-md fs-16">
                            Fast loading speed and no lagging, is my first priority, even in dynamic websites.
                        </p>
                    </Col>
                    <Col className="justify-content-center" lg>
                        <Image src={responsive} rounded className="p-3"/>
                        <h5 className="h5-responsive fw-sb">Responsive Websites</h5>
                        <p className="lead fw-md fs-16">
                            Making the webpages responsive, without comprimising with the UI design is my strongest skill. 
                        </p>
                    </Col>                        
                    <Col className="justify-content-center" lg>
                        <Image src={solve} rounded className="p-3"/>
                        <h5 className="h5-responsive fw-sb">Problem Solving</h5>
                        <p className="lead fw-md fs-16">
                            I have the ability to solve problems of any given complexity in an easy way. 
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg>
                        <Skill title="javascript" value="90"></Skill>
                    </Col>
                    <Col lg>
                        <Skill title="mern stack" value="80"></Skill>
                    </Col>
                </Row>
                <Row>
                    <Col lg>
                        <Skill title="php laravel" value="84"></Skill>
                    </Col>
                    <Col lg>
                        <Skill title="ruby on rails" value="75"></Skill>
                    </Col>
                </Row>
                <Row>
                    <Col lg>
                        <Skill title="spring" value="90"></Skill>
                    </Col>
                    <Col lg>
                        <Skill title="mean stack" value="55"></Skill>
                    </Col>
                </Row>
                <Row>
                    <Col lg>
                        <Skill title="mevn stack" value="55"></Skill>
                    </Col>
                    <Col lg>
                        <Skill title="sql/ nosql" value="90"></Skill>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Skills