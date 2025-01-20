import React from "react";
import { Link } from "carbon-components-react";
import { Col, Row } from "react-bootstrap";
import CWRU from "../../Assets/cwru.jpeg";
import USC from "../../Assets/USC.jpeg";

function Education() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={5} className="tech-icons">
            <Link
            target="_blank"
            rel="noreferrer"
            >
            <img src={USC} alt="USC logo"/>
            </Link>
            <div className="university-heading">
                University of Southern California
            </div>
            <div className="university-degree">
                Master of Science in Computer Science
            </div>
            <div className="university-date">
                Awarded in May 2020
            </div>
        </Col>

        <Col xs={4} md={5} className="tech-icons">
            <Link
                target="_blank"
                rel="noreferrer"
                >
                <img
                    src={CWRU}
                    alt="CWRU logo"
                />
            </Link>
            <div className="university-heading">
                Case Western Reserve University
            </div>
            <div className="university-degree">
                Bachelor of Science in Biomedical Engineering
            </div>
            <div className="university-date">
                Awarded in May 2018
            </div>
        </Col>
    </Row>      
  );
}

export default Education;