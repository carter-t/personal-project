import React, {Component} from 'react';
import {connect} from 'react-redux';

class SetStory extends Component {

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> TITLE: {this.props.novelTitle} </div>

          <div className="container">
            <div>
              <div className="dataline">
                <div className="databit"> VOLUME: {this.props.novelVolume} </div>
                <div className="databit"> GENRE: {this.props.novelGenre} </div>
              </div>

              <form className="sixty">
                <div className="caption"> WORLDS
                  <div className="checkform">
                    <div className="checkbox"> {this.props.novelWorlds} </div>
                  </div>
                </div>

                <div className="caption"> FACTIONS
                    <div className="checkform">
                      <div className="checkbox"> {this.props.novelFactions} </div>
                    </div>
                  </div>
 
                <div className="caption"> PLACES
                  <div className="dataform">
                    <div className="checkbox"> {this.props.novelPlaces} </div>
                  </div>
                </div>

                <div className="caption"> PEOPLE
                  <div className="checkform">
                    <div className="checkbox"> {this.props.novelPeople} </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="paragraph"> {this.props.novelSynopsis}</div>
          </div>

          <div className="button-bar">
            <button className="button2" value="ADD"> ADD </button>
            <button className="button2" value="START"> START </button>
          </div>

        </div>
              <div className="taper"></div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    novelTitle: state.novelData.noveltitle,
    novelVolume: state.novelData.novelvolume,
    novelGenre: state.novelData.novelgenre,
    novelWorlds: state.novelData.novelworlds,
    novelFactions: state.novelData.novelfactions,
    novelPlaces: state.novelData.novelplaces,
    novelPeople: state.novelData.novelpeople,
    novelSynopsis: state.novelData.novelsynopsis
  }
}, {})(SetStory);