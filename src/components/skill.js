import React from 'react'
import { Line } from 'rc-progress'
import {Col, Row} from 'react-bootstrap'

const Skill = ({ title, value }) => {
    var color = "";
    if(parseFloat(value) >= 80){
        color = "#D35400";
    }
    else if(parseFloat(value) >= 65){
        color = "#4CED4C";
    }
    else if(parseFloat(value) >= 45){
        color = "#FFC300";
    }
    else{
        color = "#FF0000";
    }
  return (
    <Row className="align-items-center my-2">
        <Col ><h4 className="h4-responsive fw-sb" style={{textAlign:'right'}}>{title}</h4> </Col>
        <Col><Line percent={value} strokeWidth="4" strokeColor={color} trailWidth="4"/></Col>
    </Row>    
  )
}

export default Skill
