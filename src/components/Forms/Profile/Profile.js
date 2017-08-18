import React, {Component} from 'react';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ''
    }
    this.updateFirstName = this.updateFirstName.bind(this);
  }

  updateFirstName(event) {
    this.setState({firstName: event});
  }

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> PROFILE </div>

          <div className="profile">
            <div className="photo"></div>
            <div className="info">
              <h1 className="fat-font"> {} </h1>
              <h1 className="small-font"> PEN NAME </h1>
              <h1 className="small-font"> PASSWORD </h1>
              <h1 className="small-font"> EMAIL </h1>
            </div>
          </div>

          {/* <div className="button-bar">
            <Button2 value="NEW"/>
          </div> */}

        </div>
              <div className="taper"></div>
      </div>
    )
  }
}