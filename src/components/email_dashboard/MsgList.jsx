import React, { Component } from "react";
import Msg from "./Msg";

class MsgList extends Component {
  state = {};

  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        {this.props.emails.map(email => (
          <Msg
            email={email}
            key={email.id}
            onToggle_Favorited={this.props.onToggle_Favorited}
            onToggle_CheckBox={this.props.onToggle_CheckBox}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default MsgList;
