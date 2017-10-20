import React, { Component } from 'react';


class Slider extends Component {

  constructor() {
    super();
    this.state = {
      images:   [
        { path: 'images/slider1.jpg' }
      ]
    };
  }

  render() {

    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item active">
            <img src={this.state.images[0].path} alt="RitApp" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
