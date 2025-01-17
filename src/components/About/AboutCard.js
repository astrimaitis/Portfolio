import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Andrew Strimaitis</span>
            from <span className="purple">San Francisco Bay Area.</span>
            <br />
            I have degrees in Biomedical Engineering from Case Western Reserve University and Computer Science from University of Southern California.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Completing Technology Certfications
            </li>
            <li className="about-activity">
              <ImPointRight />Reading about History
            </li>
            <li className="about-activity">
              <ImPointRight />Playing and Watching Tennis
            </li>
            <li className="about-activity">
              <ImPointRight />Traveling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
