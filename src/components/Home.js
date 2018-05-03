import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Carousel from './Carousel'

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Carousel className="container-fluid"/> <br/>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/profilsmall.png" circle className="profile-pic"/>
            <h3>Magnus Wallin</h3>
          </Col>
        </Row>
        <Jumbotron>
          <h2>Front End Developer</h2>
          <p>Hi! My name is Magnus Wallin | Front End Developer from Stockholm, Sweden. </p>
          <Link to="/about">
            <Button bsStyle="primary">Contact</Button>
          </Link>
        </Jumbotron>
      </Grid>
    )
  }
}
