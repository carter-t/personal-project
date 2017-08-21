import React, {Component} from 'react';
import {connect} from 'react-redux';

class StoryFour extends Component {

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> TITLE: {this.props.storyTitle} </div>

          <div className="container">
            <div>
              <div className="dataline">
                <div className="databit"> VOLUME: {this.props.storyVolume} </div>
                <div className="databit"> GENRE: {this.props.storyGenre} </div>
              </div>

              <form className="sixty">
                <div className="caption"> WORLDS
                  <div className="checkform">
                    <div className="checkbox"> {this.props.storyWorlds} </div>
                  </div>
                </div>

                <div className="caption"> FACTIONS
                    <div className="checkform">
                      <div className="checkbox"> {this.props.storyFactions} </div>
                    </div>
                  </div>
 
                <div className="caption"> PLACES
                  <div className="dataform">
                    <div className="checkbox"> {this.props.storyPlaces} </div>
                  </div>
                </div>

                <div className="caption"> PEOPLE
                  <div className="checkform">
                    <div className="checkbox"> {this.props.storyPeople} </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="paragraph"> {this.props.storySynopsis}</div>
          </div>

        </div>
              <div className="taper"></div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    storyTitle: state.storyForm.title,
    storyVolume: state.storyForm.volume,
    storyGenre: state.storyForm.genre,
    storyWorlds: state.storyForm.worlds,
    storyFactions: state.storyForm.places,
    storyPlaces: state.storyForm.people,
    storySynopsis: state.storyForm.synopsis
  }
}, {})(StoryFour);