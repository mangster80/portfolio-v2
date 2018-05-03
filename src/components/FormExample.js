import React from 'react';
import { Button, HelpBlock, FormControl, ControlLabel, FormGroup, Jumbotron, Grid } from 'react-bootstrap';

class FormExample extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Grid>
        <Jumbotron>

            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()} >
              <ControlLabel>Working example with validation</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Leave a footprint..."
                onChange={this.handleChange}/>
                <FormGroup controlId="formControlsTextarea">
                  <br />
                  <ControlLabel>Textarea</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="textarea" />
                </FormGroup>
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
            <Button type="submit">Submit</Button>

        </Jumbotron>
    </Grid>
    );
  }
}

export default FormExample;
