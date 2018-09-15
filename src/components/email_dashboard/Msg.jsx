import React, { Component } from "react";

class Msg extends Component {
  state = {};

  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <div className={this.getEmailClasses()}>
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input
                  type="checkbox"
                  checked={this.getEmailCheckboxInput()}
                  onChange={()=> this.props.onToggle_CheckBox(this.props.email.id)}
                />
              </div>
              <div className="col-xs-2">
                <i
                  className={this.getEmailFavorited()}
                  onClick={() => this.props.onToggle_Favorited(this.props.email.id)}
                />
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            {this.getEmailLabels()}
            <span>{this.props.email.subject}</span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  // If the message is read, it should have the read style
  // If the message is unread, it should have the unread
  // If the message is selected, it should have the selected style
  getEmailClasses = () => {
    let classes = "row message";
    this.props.email.read === true
      ? (classes += " read")
      : (classes += " unread");
    // this.props.emails.
    this.props.email.selected === true ? (classes += " selected") : classes += "";
    return classes;
  };

  // If the message is favorited, then the star should be filled in, otherwise it should be empty
  getEmailFavorited = () => {
    let classes = "star fa fa-star";
    this.props.email.starred === false ? (classes += "-o") : classes;
    return classes;
  };

  //  If the message is selected, the box should be checked
  getEmailCheckboxInput = () => {
    let result = this.props.email.selected === true ? "checked" : "";
    return result;
  };

  // If there are labels on a message, they should appear
  getEmailLabels = () => {
    let labels = this.props.email.labels;
    return labels.map((label, i) => {
      return (
        <span className="label label-warning" key={i}>
          {label}
        </span>
      );
    });
  };

}

export default Msg;
