import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

const API = 'https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=39c7d17bc92c8b7be6b09ca0f5e6c9cd'

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        temp: "",
        pressure: "",
        humidity: "",
        temp_min: "",
        temp_max: ""
      },
      comment: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ weather: data.main }));
  }

  render() {
    var tempRounded = Math.floor((this.state.weather.temp - 272.15) * 10) / 10

    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <p>{tempRounded}°C</p>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              Contact
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/guestbook" to="/guestbook">
              Guestbook
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
