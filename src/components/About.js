import React, { Component } from 'react'
import { Grid, Col, Image, Row, Button, Jumbotron } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Jumbotron>
            <h1>Hi,</h1>
            <p>My name is Magnus Wallin and I'm a Front-End Developer from Stockholm, Sweden.</p>
            <p>If you want to contact me, check me out on your favorite social media platform or send me an e-mail.</p>
            <Button><a href="mailto:magnus.wallin@student.kyh.se" target="_top">Send Mail</a></Button>
          </Jumbotron>
          <Jumbotron>
            <Row className="show-grid">
              <Col xs={4} s={4} md={3} lg={2}>
                <a href="https://www.linkedin.com/in/magnus-wallin-4b5937b3/"><Image src="assets/linkedin.svg" className="about-profile-pic" responsive /></a>
              </Col>
              <Col xs={4} s={3} md={3} lg={2}>
                <a href="https://www.facebook.com/mange.wallin"><Image src="assets/facebook-square.svg" className="about-profile-pic" responsive /></a>
              </Col>
              <Col xs={4} s={4} md={3} lg={2}>
                <a href="https://www.instagram.com/mangewallin/?hl=sv"><Image src="assets/instagram.svg" className="about-profile-pic" responsive /></a>
              </Col>
            </Row>
          </Jumbotron>
          <Jumbotron>
          <h1>This is some of the tools I'm working with.</h1> <br/>
            <Row className="show-grid">
              <Col xs={4} s={4} md={3} lg={2}>
                <Image src="assets/bootstrap.png" className="about-profile-pic" responsive />
                <h4>BOOTSTRAP</h4>
              </Col>
              <Col xs={4} s={3} md={3} lg={2}>
                <Image src="assets/css3.png" className="about-profile-pic" responsive />
                <h4>CSS3</h4>
              </Col>
              <Col xs={4} s={4} md={3} lg={2}>
                <Image src="assets/html5.png" className="about-profile-pic" responsive />
                <h4>HTML5</h4>
              </Col>
              <Col xs={4} s={4} md={3} lg={2}>
                <Image src="assets/jquery.png" className="about-profile-pic" responsive />
                <h4>JQUERY</h4>
              </Col>
              <Col xs={4} s={4} md={3} lg={2}>
                <Image src="assets/js.png" className="about-profile-pic" responsive />
                <h4>JS</h4>
              </Col>
              <Col xs={4} s={4} md={3} lg={2}>
                <Image src="assets/react-logo.png" className="about-profile-pic" responsive />
                <h4>REACT</h4>
              </Col>
            </Row>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}
