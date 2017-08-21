import React, {Component} from 'react';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ''
    }
  }

  render() {
    return (
      <div>

        <div className="book">
          <div className="novel"> Welcome to Scribl3! </div>
          <div className="volume"> A Fictional Worldbuilding Tool for Sci-Fi/Fantasy Stories </div>
          <div className="volume"> Login above to start building! </div>
        </div>
          
        <div className="cut"></div>

      </div>
    )
  }
}