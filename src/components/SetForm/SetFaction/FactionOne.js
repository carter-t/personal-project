import React, {Component} from 'react';
import {connect} from 'react-redux';

class StoryOne extends Component {

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> TITLE: {this.props.novelOneTitle} </div>

          <div className="container">
            <div>
              <div className="dataline">
                <div className="databit"> VOLUME: {this.props.novelOneVolume} </div>
                <div className="databit"> GENRE: {this.props.novelOneGenre} </div>
              </div>

              <form className="sixty">
                <div className="caption"> WORLDS
                  <div className="checkform">
                    <div className="checkbox"> {this.props.novelOneWorlds} </div>
                  </div>
                </div>

                <div className="caption"> FACTIONS
                    <div className="checkform">
                      <div className="checkbox"> {this.props.novelOneFactions} </div>
                    </div>
                  </div>
 
                <div className="caption"> PLACES
                  <div className="dataform">
                    <div className="checkbox"> {this.props.novelOnePlaces} </div>
                  </div>
                </div>

                <div className="caption"> PEOPLE
                  <div className="checkform">
                    <div className="checkbox"> {this.props.novelOnePeople} </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="paragraph"> {this.props.novelOneSynopsis}</div>
          </div>

        </div>
              <div className="taper"></div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    novelOneTitle: state.novelOne.noveltitle,
    novelOneVolume: state.novelOne.novelvolume,
    novelOneGenre: state.novelOne.novelgenre,
    novelOneWorlds: state.novelOne.novelworlds,
    novelOneFactions: state.novelOne.novelfactions,
    novelOnePlaces: state.novelOne.novelplaces,
    novelOnePeople: state.novelOne.novelpeople,
    novelOneSynopsis: state.novelOne.novelsynopsis
  }
}, {})(StoryOne);