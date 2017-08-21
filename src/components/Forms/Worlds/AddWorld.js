import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddNovel extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>

        <div className="single-item">
          <button className="item-title button3 round-left"
            onClick={ () => this.updateSet('FOUR')}> {this.props.storyTitle} | {this.props.storyVolume} </button>
        </div>

      </div>
    )
  }
}

export default connect((state) => {
  return {
    storyTitle: state.storyForm.title,
    storyVolume: state.storyForm.volume
  }
}, {})(AddNovel);