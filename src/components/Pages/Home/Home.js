import React, {Component} from 'react';
import {connect} from 'react-redux';

// import {Button} from './../Buttons/Buttons.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  render() {

    return (
      <main className="home">
        <aside className="left"></aside>
        <aside className="right"></aside>
        
        <section className="center">

          <div className="content">
            <h2 className="title"> Welcome to Archetype </h2>
            <p className="caption"> A Customizable 3D Media Player </p>
          </div>

        </section>
      </main>
    )
  }
}

export default connect((state) => {
  return {
    props: state.state
  }
}, {})(Home);