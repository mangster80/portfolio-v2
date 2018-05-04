import React from 'react'
import { Button, FormControl, ControlLabel, Jumbotron, Grid } from 'react-bootstrap';
import GuestbookRow from './GuestbookRow'

class Guestbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestbook: [],
      name: "",
      message: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://portfolio-api-heroku.herokuapp.com/mw_guestbook')
    .then(response => response.json())
    .then(res => {
      this.setState({guestbook: res.data})
      console.log(this.state.guestbook)
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    var self = this;
    fetch('https://portfolio-api-heroku.herokuapp.com/mw_guestbook',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({name: this.state.name, message: this.state.message})
    })
    .then((response) => {
      this.setState(prevState => ({
        guestbook: [...prevState.guestbook, {name: self.state.name, message: self.state.message}]
      }))
      return response.json()
    })
    .then((data) => {
      console.log('post request response data' + data)
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Grid>
        <Jumbotron>
          <form onSubmit={this.handleSubmit}>
            <ControlLabel>Name</ControlLabel>
            <FormControl name="name" type="text" placeholder="Enter name" onChange={this.handleInputChange} required/>
            {/* <input id="name" name="name" type="text" onChange={this.handleInputChange} required /> */}
            <br/>
            <ControlLabel>Message</ControlLabel>
            <FormControl type="text" name="message" placeholder="Leave a footprint" onChange={this.handleInputChange} required /> <br/>
            {/* <input id="message" name="message" type="text" onChange={this.handleInputChange} required /> */}
            <Button type="submit">Submit</Button>
            <br/>
          </form>
        </Jumbotron>
          <GuestbookRow guestbook={this.state.guestbook} />
      </Grid>
    );
  }
}

export default Guestbook;
