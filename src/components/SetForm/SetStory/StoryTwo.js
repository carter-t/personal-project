import React, {Component} from 'react';
import {connect} from 'react-redux';

class StoryTwo extends Component {

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> TITLE: {this.props.novelTwoTitle} </div>

          <div className="container">
            <div>
              <div className="dataline">
                <div className="databit"> VOLUME: {this.props.novelTwoVolume} </div>
                <div className="databit"> GENRE: {this.props.novelTwoGenre} </div>
              </div>

              <form className="sixty">
                <div className="caption"> WORLDS
                  <div className="checkform">
                    <div className="checkbox"> {this.props.novelTwoWorlds} </div>
                  </div>
                </div>

                <div className="caption"> FACTIONS
                    <div className="checkform">
                      <div className="checkbox"> {this.props.novelTwoFactions} </div>
                    </div>
                  </div>
 
                <div className="caption"> PLACES
                  <div className="dataform">
                    <div className="checkbox"> {this.props.novelTwoPlaces} </div>
                  </div>
                </div>

                <div className="caption"> PEOPLE
                  <div className="checkform">
                    <div className="checkbox"> {this.props.novelTwoPeople} </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="paragraph"> {this.props.novelTwoSynopsis}</div>
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
    novelTwoTitle: state.novelTwo.noveltitle,
    novelTwoVolume: state.novelTwo.novelvolume,
    novelTwoGenre: state.novelTwo.novelgenre,
    novelTwoWorlds: state.novelTwo.novelworlds,
    novelTwoFactions: state.novelTwo.novelfactions,
    novelTwoPlaces: state.novelTwo.novelplaces,
    novelTwoPeople: state.novelTwo.novelpeople,
    novelTwoSynopsis: state.novelTwo.novelsynopsis
  }
}, {})(StoryTwo);