import React, { Component } from 'react';
import Nav from '../Nav';
import Slider from './Slider';

class Homepage extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Slider />
        <div className="banner text-center">
          <h1 className="text-center">RitApp</h1>
          <button className="btn btn-1 btn-1e">Surveillance System</button>
        </div>
      </div>
    );
  }

}

export default Homepage;
