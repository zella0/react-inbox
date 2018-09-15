import React, { Component } from 'react';
import MsgList from './components/email_dashboard/MsgList';
import Toolbar from './components/email_dashboard/Toolbar';

class App extends Component {
  state = {
    emails: [{
        id: 1,
        subject: "You can't input the protocol without calculating the mobile RSS protocol!",
        read: false,
        starred: true,
        labels: ["dev", "personal"]
      },
      {
        id: 2,
        subject: "connecting the system won't do anything, we need to input the mobile AI panel!",
        read: false,
        starred: false,
        selected: true,
        labels: []
      },
      {
        id: 3,
        subject: "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        read: false,
        starred: true,
        labels: ["dev"]
      },
      {
        id: 4,
        subject: "We need to program the primary TCP hard drive!",
        read: true,
        starred: false,
        selected: true,
        labels: []
      },
      {
        id: 5,
        subject: "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        read: false,
        starred: false,
        labels: ["personal"]
      },
      {
        id: 6,
        subject: "We need to back up the wireless GB driver!",
        read: true,
        starred: true,
        labels: []
      },
      {
        id: 7,
        subject: "We need to index the mobile PCI bus!",
        read: true,
        starred: false,
        labels: ["dev", "personal"]
      },
      {
        id: 8,
        subject: "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        read: true,
        starred: true,
        labels: []
      }
    ]
  };

  render() {
    return (
      <div>
        <Toolbar
          emails={this.state.emails}
          selectAllBox={this.handleSelectAllEmail}
          handleReadEmail={this.handleReadEmail}
          handleUnreadEmail={this.handleUnreadEmail}
          handleDeleteEmail={this.handleDeleteEmail}
          handleApplyLabels={this.handleApplyLabels}
          handleRemoveLabels={this.handleRemoveLabels}
        />
        <MsgList
          emails={this.state.emails}
          onToggle_Favorited={this.handleFavoritedEmail}
          onToggle_CheckBox={this.handleCheckedEmail}
        />
      </div>
    );
  }

  getSelectedEmailIndex = (email_ID) => {
    const emails = [...this.state.emails];
    return emails.findIndex((element) => {
      return element.id === email_ID;
    })
  }

  // When a user clicks the star next to a message
  // Then it should toggle whether the message is starred or not
  handleFavoritedEmail = (email_ID) => {
    const emails = [...this.state.emails];
    const index = this.getSelectedEmailIndex(email_ID);

  // toggle state changes logic
    emails[index].starred = !emails[index].starred;
    this.setState({ emails });
  }

  // When a user checks the checkbox on a message
  // Then the message should be highlighted, else NOT higlighted 
  handleCheckedEmail = (email_ID) => {
    const emails = [...this.state.emails];
    const index = this.getSelectedEmailIndex(email_ID);

    // toggle state changes logic
    emails[index].selected = !emails[index].selected;

    console.log(emails[index].selected);
    this.setState({ emails });
  }

  // if 'minus' check all (select = true)
  // if 'check' uncheck all (selected = false)
  handleSelectAllEmail = (e) =>{
    const currentClasses = e;
    const emails = [...this.state.emails];

    currentClasses.includes('minus') ?
    emails.map((email)=>{
      email.selected = true;
    }) :
    currentClasses.includes('check') ?
    emails.map((email) => {
      email.selected = false;
    }) :
    emails.map((email) => {
      email.selected = true;
    })

    this.setState({ emails })
  }

  // When a user selects messages
  // And presses "Mark As Read"
  // Then each selected message should be marked as read
  // And should no longer be bold
  handleReadEmail = () => {
    const emails = [...this.state.emails];

    emails.map((email)=>{
      email.selected ? email.read = true : null;
    })
    
    this.setState({ emails })
  }

  handleUnreadEmail = () => {
    const emails = [...this.state.emails];

    emails.map((email) => {
      email.selected ? email.read = false : null;
    })
    
    this.setState({ emails })
  }

  // Delete selected Emails
  handleDeleteEmail = () => {
    const emailsCopy = [...this.state.emails];
    const emails = emailsCopy.filter((email) => email.selected !== true)
    this.setState({ emails })
  }

  // Applying labels if selected
  handleApplyLabels = (option) => {
    const emails = [...this.state.emails];
    
    emails.map((email) => {
      email.selected ? email.labels.push(option) : null;
      email.labels = [...new Set(email.labels)];
    })
    
    this.setState({ emails })
  }
  
  // Removing labels if selected
  handleRemoveLabels = (option) => {
    const emails = [...this.state.emails];
    emails.map((email) => {
      email.selected ? 
      email.labels.map((label, i)=>{
        label === option ? email.labels.splice(i, 1) : null;
      }) : null;
    })

    this.setState({ emails })
  }
}

export default App;
