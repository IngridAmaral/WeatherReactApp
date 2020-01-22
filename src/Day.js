import React, { Component } from 'react';

class Day extends Component {
  render() {
      return (
      <div className='day'>
        <p>{this.props.week}</p>
        <img src='https://freesvg.org/img/Anonymous_simple_weather_symbols_1.png' alt={this.props.id} />
        <div>
            <p>Max: 8</p>
            <p>Min: 5</p>
        </div>
      </div>
    )    
  }
}
export default Day;