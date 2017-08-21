import React, {Component} from 'react';
import {connect} from 'react-redux';

class WorldOne extends Component {

  render() {
    return (
      <div>

        <div className="wrapper">
          <div className="category"> NAME: {this.props.worldOneName} </div>

          <div className="container">
            <div>
              <div className="dataline">
                <div className="databit"> ERA: {this.props.worldOneEra} </div>
                <div className="databit"> UNIVERSE: {this.props.worldOneUni} </div>
              </div>

              <form className="sixty">
                <div className="caption"> LANDMASSES
                  <div className="checkform">
                    <div className="checkbox"> {this.props.worldOneLand} </div>
                  </div>
                </div>

                <div className="caption"> PRACTICES
                    <div className="checkform">
                      <div className="checkbox"> {this.props.worldOnePractice} </div>
                    </div>
                  </div>
 
                <div className="caption"> INHABITANTS
                  <div className="dataform">
                    <div className="checkbox"> {this.props.worldOneInhab} </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="paragraph"> {this.props.worldOneDesc}</div>
            <div className="paragraph"> {this.props.worldOneLore}</div>
          </div>

        </div>
              <div className="taper"></div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    worldOneName: state.worldOne.worldname,
    worldOneEra: state.worldOne.worldera,
    worldOneUni: state.worldOne.worlduni,
    worldOneLand: state.worldOne.worldland,
    worldOnePractice: state.worldOne.worldpractice,
    worldOneInhab: state.worldOne.worldinhab,
    worldOneDesc: state.worldOne.worlddesc,
    worldOneLore: state.worldOne.worldlore
  }
}, {})(WorldOne);