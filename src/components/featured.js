import React from 'react'
import {Container} from 'react-bootstrap'
const Featured = () => {
    return(
        <Container>
            <div className="card card-image" id="featured">
            <div className="text-center py-5 px-4 my-5">
                <div>
                <h1 className="card-title semi-large-text pt-3 mb-0 fw-eb" style={{lineHeight:'1.0'}}>Transforming</h1>
                <h1 className="card-title semi-large-text fw-eb mb-0"  style={{lineHeight:'1.0'}}>ideas into reality,</h1>
                <h1 className="card-title fw-ub large-text mb-4"  style={{lineHeight:'1.0'}}>Digitally</h1>
                <p className="lead mx-lg-5 mb-lg-5 mx-sm-2 px-lg-5 mt-3 fw-md">
                    Building digital products, brands, and experience for small organisations.<br/>
                    Creating best UI/UX designs and developing responsive webpages. 
                </p>
                <button type="button" className="btn btn-mdb-color fw-b fs-16" style={{textTransform : 'none'}}> Let's work Together </button>
                </div>
            </div>
            </div>
        </Container>
    )
}

export default Featured