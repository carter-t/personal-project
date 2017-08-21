import React, {Component} from 'react';
import {connect} from 'react-redux';

class WorldThree extends Component {

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> NAME: {this.props.worldThreeName} </div>

          <div className="container">
            <div>
              <div className="dataline">
                <div className="databit"> ERA: {this.props.worldThreeEra} </div>
                <div className="databit"> UNIVERSE: {this.props.worldThreeUni} </div>
              </div>

              <form className="sixty">
                <div className="caption"> LANDMASSES
                  <div className="checkform">
                    <div className="checkbox"> {this.props.worldThreeLand} </div>
                  </div>
                </div>

                <div className="caption"> PRACTICES
                    <div className="checkform">
                      <div className="checkbox"> {this.props.worldThreePractice} </div>
                    </div>
                  </div>
 
                <div className="caption"> INHABITANTS
                  <div className="dataform">
                    <div className="checkbox"> {this.props.worldThreeInhab} </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="paragraph"> {this.props.worldThreeDesc}</div>
            <div className="paragraph"> {this.props.worldThreeLore}</div>
          </div>

        </div>
              <div className="taper"></div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    worldThreeName: state.worldThree.worldname,
    worldThreeEra: state.worldThree.worldera,
    worldThreeUni: state.worldThree.worlduni,
    worldThreeLand: state.worldThree.worldland,
    worldThreePractice: state.worldThree.worldpractice,
    worldThreeInhab: state.worldThree.worldinhab,
    worldThreeDesc: state.worldThree.worlddesc,
    worldThreeLore: state.worldThree.worldlore
  }
}, {})(WorldThree);