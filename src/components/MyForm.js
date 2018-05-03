import React from 'react'

class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    var data = new FormData(event.target)
    console.log(data);

    fetch('http://localhost:4000/guestbook',{
      method: 'post',
      body: JSON.stringify(data)
    })
    .then(function (response) {
      // return response.json()
      console.log(response);
    })
    .then(function (data) {
      console.log('post request response data', data)
    })
  }
  // handleSubmit(event) {
  //   event.preventDefault();
  //
  //   var data = new FormData(event.target);
  //   data.append( "json", JSON.stringify( data ) );
  //
  //   fetch("http://localhost:4000/guestbook/",
  //   {
  //       method: "POST",
  //       body: data
  //   })
  //   .then(function(res){ return res.json(); })
  //   .then(function(data){ alert( JSON.stringify( data ) ) })
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="message">Message</label>
        <input id="message" name="message" type="text" required />


        <button>Send data!</button>
      </form>
    );
  }
}
export default MyForm
