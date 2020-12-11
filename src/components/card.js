import React from 'react'
import {ImGithub} from 'react-icons/im'
import {FaDesktop} from 'react-icons/fa'
const MCard = ({ platform, title, paragraph, img, link }) => {
  return (
    <div className="card card-image my-2" style={{background:`url(${img})`}}>  
      <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
          <div>
          <h4 className="fw-eb"><FaDesktop /> {platform}</h4>
          <h5 className="card-title pt-2 fw-b">{title}</h5>
          <p className="fw-sb">{paragraph}</p>
          <a className="btn btn-secondary fw-b btn-sm" href={link}><ImGithub /> Explore</a>
          </div>
      </div>
  </div>
  )
}

export default MCard
