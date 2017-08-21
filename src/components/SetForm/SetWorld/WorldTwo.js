import React, {Component} from 'react';
import {connect} from 'react-redux';

class WorldTwo extends Component {

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> NAME: {this.props.worldTwoName} </div>

          <div className="container">
            <div>
              <div className="dataline">
                <div className="databit"> ERA: {this.props.worldTwoEra} </div>
                <div className="databit"> UNIVERSE: {this.props.worldOneUni} </div>
              </div>

              <form className="sixty">
                <div className="caption"> LANDMASSES
                  <div className="checkform">
                    <div className="checkbox"> {this.props.worldTwoLand} </div>
                  </div>
                </div>

                <div className="caption"> PRACTICES
                    <div className="checkform">
                      <div className="checkbox"> {this.props.worldTwoPractice} </div>
                    </div>
                  </div>
 
                <div className="caption"> INHABITANTS
                  <div className="dataform">
                    <div className="checkbox"> {this.props.worldTwoInhab} </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="paragraph"> {this.props.worldTwoDesc}</div>
            <div className="paragraph"> {this.props.worldTwoLore}</div>
          </div>

        </div>
              <div className="taper"></div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    worldTwoName: state.worldTwo.worldname,
    worldTwoEra: state.worldTwo.worldera,
    worldTwoUni: state.worldTwo.worlduni,
    worldTwoLand: state.worldTwo.worldland,
    worldTwoPractice: state.worldTwo.worldpractice,
    worldTwoInhab: state.worldTwo.worldinhab,
    worldTwoDesc: state.worldTwo.worlddesc,
    worldTwoLore: state.worldTwo.worldlore
  }
}, {})(WorldTwo);