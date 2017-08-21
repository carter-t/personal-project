import React, {Component} from 'react';
import {connect} from 'react-redux';

class StoryThree extends Component {

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> TITLE: {this.props.novelThreeTitle} </div>

          <div className="container">
            <div>
              <div className="dataline">
                <div className="databit"> VOLUME: {this.props.novelThreeVolume} </div>
                <div className="databit"> GENRE: {this.props.novelThreeGenre} </div>
              </div>

              <form className="sixty">
                <div className="caption"> WORLDS
                  <div className="checkform">
                    <div className="checkbox"> {this.props.novelThreeWorlds} </div>
                  </div>
                </div>

                <div className="caption"> FACTIONS
                    <div className="checkform">
                      <div className="checkbox"> {this.props.novelThreeFactions} </div>
                    </div>
                  </div>
 
                <div className="caption"> PLACES
                  <div className="dataform">
                    <div className="checkbox"> {this.props.novelThreePlaces} </div>
                  </div>
                </div>

                <div className="caption"> PEOPLE
                  <div className="checkform">
                    <div className="checkbox"> {this.props.novelThreePeople} </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="paragraph"> {this.props.novelThreeSynopsis}</div>
          </div>

          {/* <div className="button-bar">
            <button className="button2" value="ADD"> ADD </button>
            <button className="button2" value="START"> START </button>
          </div> */}

        </div>
              <div className="taper"></div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    novelThreeTitle: state.novelThree.noveltitle,
    novelThreeVolume: state.novelThree.novelvolume,
    novelThreeGenre: state.novelThree.novelgenre,
    novelThreeWorlds: state.novelThree.novelworlds,
    novelThreeFactions: state.novelThree.novelfactions,
    novelThreePlaces: state.novelThree.novelplaces,
    novelThreePeople: state.novelThree.novelpeople,
    novelThreeSynopsis: state.novelThree.novelsynopsis
  }
}, {})(StoryThree);