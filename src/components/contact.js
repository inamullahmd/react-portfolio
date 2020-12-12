import React from 'react'
import {Container} from 'react-bootstrap'
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa'
const Contact = () => {
    return(
        <Container className="text-center">
            <div id="contact">
                <h1 className="h1-responsive fw-b my-3">Contact</h1>
                <h4 className="h4-resonsive fw-sb my-4">Let's create something together</h4>
                <a className="mail-link" href={`mailto:mohammadinamullahmdi@gmail.com`}>
                    mohammadinamullahmdi@gmail.com
                </a>
                <div className="social p-4">
                    <a href="https://github.com/inamullahmdi/" className="p-2"><FaGithub/></a>
                    <a href="#" className="p-2"><FaInstagram/></a>
                    <a href="#" className="p-2"><FaTwitter/> </a>
                    <a href="#" className="p-2"><FaLinkedin/></a>
                    <a href="#" className="p-2"><FaFacebook/></a>                       
                </div>
                <h5 class="h5-responsive mb-5">Made with 💝 by <a class="fw-b" href="https://github.com/inamullahmdi">Mohammad Inamullah</a> </h5>
            </div>
        </Container>
    )
}

export default Contact