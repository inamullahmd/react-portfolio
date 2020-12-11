import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import aboutimage from '../images/about.jpg'
const About = () => {
    return(
        <Container>
            <div id="about">
                <Row className="justify-content-center">
                    <Col className="p-lg-5 p-sm-3" style={{textAlign:'center'}}>
                        <h2 className="h2-responsive fw-b mt-lg-3 pt-lg-5 mb-1">Hello.</h2>
                        <h3 className="h3-responsive fw-sb mb-3">I'm David Mason.</h3>
                        <p className="lead fw-md">
                        Product Designer at Origin.
                        Self taught with over 14 years of experience in Web Development.
                        I bring a range of skills from basic HTML to Core Frameworks.
                        I focus on creating rich responsive, efficient web applications.
                        I'm always looking forward to learn and work on new technologies.
                        </p>
                    </Col>
                    <Col lg={4}  className="p-4">
                        <Image src={aboutimage} fluid rounded/>
                    </Col>
                </Row>

            </div>
        </Container>
    )
}

export default About