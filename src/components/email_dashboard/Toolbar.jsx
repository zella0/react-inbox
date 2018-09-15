import React, { Component } from "react";

class Toolbar extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">{this.unreadEmailsCount()}</span>
              unread messages
            </p>

            <button
              className="btn btn-default"
              onClick={e =>
                this.props.selectAllBox(
                  e.currentTarget.firstElementChild.className
                )
              }
            >
              <i className={this.getSelectAllClasses()} />
            </button>

            <button
              className="btn btn-default"
              onClick={() => {
                this.props.handleReadEmail();
              }}
            >
              Mark As Read
            </button>

            <button
              className="btn btn-default"
              onClick={() => {
                this.props.handleUnreadEmail();
              }}
            >
              Mark As Unread
            </button>

            <select
              className="form-control label-select"
              onChange={e => {
                this.props.handleApplyLabels(e.target.value);
              }}
            >
              <option value="">Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select
              className="form-control label-select"
              onChange={e => {
                this.props.handleRemoveLabels(e.target.value);
              }}
            >
              <option value="">Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>
            <button
              className="btn btn-default"
              onClick={() => {
                this.props.handleDeleteEmail();
              }}
            >
              <i className="fa fa-trash-o" />
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  // When a user toggle the "Select All" checkbox, toggle its style
  // Then it should toggle and change check/uncheck state on all messages
  getSelectAllClasses = () => {
    let selectedAcc = 0;
    let unselectedAcc = 0;
    let baseClassesHead = "fa fa-";
    let baseClassesTail = "square-o";
    let conditionalClasses;

    this.props.emails.map(email => {
      email.selected ? selectedAcc++ : unselectedAcc++;
      // selectedAcc > 0 && unselectedAcc > 0 ? conditionalClasses = "minus" : conditionalClasses;
      if (selectedAcc > 0 && unselectedAcc > 0) {
        conditionalClasses = "minus-";
        return;
      } else if (selectedAcc === this.props.emails.length) {
        conditionalClasses = "check-";
        return;
      }
    });

    let classesResult = `${baseClassesHead}${conditionalClasses ||
      ""}${baseClassesTail}`;
    console.log(classesResult);
    return classesResult;
  };

  unreadEmailsCount = () => {
    let count =
      this.props.emails.reduce((acc, email) => {
        email.read === false ? acc++ : acc;
        return acc;
      }, 0) || 0;
    return count;
  };
}

export default Toolbar;
