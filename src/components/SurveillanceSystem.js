import React, { Component } from 'react';
import Nav from './Nav';

class SurveillanceSystem extends Component {

  render() {
    return (
      <div className="surveillance">
        <Nav />
        <h1 className="text-center surveillance-title">Surveillance System</h1>
        <div className="container text-center surveillance-content">
          <video id="videoPlayer" controls>
            <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }

}

export default SurveillanceSystem;
