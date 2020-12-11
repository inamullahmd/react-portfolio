import React from 'react'
import {Container} from 'react-bootstrap'
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa'
const Contact = () => {
    return(
        <Container className="text-center">
            <div id="contact">
                <h1 className="h1-responsive fw-b my-3">Contact</h1>
                <h3 className="h3-resonsive fw-sb my-4">Let's create something together</h3>
                <a className="mail-link" href={`mailto:mohammadinamullahmdi@gmail.com`}>
                    mohammadinamullahmdi@gmail.com
                </a>
                <div className="social p-4">
                    <FaGithub/> <FaInstagram/> <FaLinkedin/> <FaTwitter/> <FaFacebook/>
                </div>
                <h5 class="h5-responsive mb-5">Made with 💝 by <span class="fw-b">Mohammad Inamullah</span> </h5>
            </div>
        </Container>
    )
}

export default Contact