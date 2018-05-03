import React from 'react'
import './GuestbookRow.css'
import { Panel } from 'react-bootstrap';

export default class GuestbookRow extends React.Component {
  render() {
    return (
      <div className="postmessage">
        {(this.props.guestbook) ? this.props.guestbook.map((value, key) =>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3" key={key}>{value.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>{value.message}</Panel.Body>
        </Panel>
      ) : "" }
    </div>
    )
  }
}
