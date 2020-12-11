import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {ImGithub} from 'react-icons/im'
import {FaDesktop} from 'react-icons/fa'
import Mcard from './card'

import ror from '../images/ror.png'
import mean from '../images/mean.jpg'
import mern from '../images/MERN.png'
import mevn from '../images/MEVN.jpg'
import laravel from '../images/laravel.jpg'
import php from '../images/php.png'

const Work = () => {
    return(
        <Container className="text-center mt-3">            
            <div id="work" className="py-4">
                <h1 className="h1-responsive fw-b my-4">Work</h1>
                <Row className="m-3">
                    <Col lg>
                        <Mcard
                            platform = "Ruby on Rails"
                            title = "codeship.io"
                            paragraph = "The codeship runs your hosted tests and automated deployments."
                            img = {ror}
                            link = "#"
                        >
                        </Mcard>
                    </Col>
                    <Col lg>
                        <Mcard
                            platform = "MEAN Stack"
                            title = "bestjobs.com"
                            paragraph = "This helps you find entry-level jobs with a guided experience through to job interviews."
                            img = {mean}
                            link = "#"
                        >
                        </Mcard>
                    </Col>
                    <Col lg>
                        <Mcard
                            platform = "LAMP Stack"
                            title = "ruxit.online"
                            paragraph = "Ruxit is the all-in-one monitoring solution for websites, servers and cloud infrastructure."
                            img = {php}
                            link = "#"
                        >
                        </Mcard>
                    </Col>
                </Row>
                <Row className="m-3">
                    <Col lg>
                        <Mcard
                            platform = "MERN Stack"
                            title = "abuffet.com"
                            paragraph = "This helps you manage all food orders, buffet orders, in a restaurant."
                            img = {mern}
                            link = "#"
                        >
                        </Mcard>
                    </Col>
                    <Col lg>
                        <Mcard
                            platform = "Laravel"
                            title = "qovex.com"
                            paragraph = "Qovex is an admin dashboard template that is a beautifully crafted, clean admin template."
                            img = {laravel}
                            link = "#"
                        >
                        </Mcard>
                    </Col>
                    <Col lg>
                        <Mcard
                            platform = "MEVN Stack"
                            title = "architect.io"
                            paragraph = "The world’s first DevOps platform – helping teams collaborate and achieve deployment."
                            img = {mevn}
                            link = "#"
                        >
                        </Mcard>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Work