import React, { Component } from 'react';

class Day extends Component {
  render() {
  
      return (
      <div className='day' onClick={this.props.onClick} id={this.props.id}>
        <p>{this.props.weekDay}</p>
        <img src={this.props.image} alt={this.props.dateMili} />
        <div>
        <p>{this.props.temperature}</p>
        </div>  
      </div>
    )    
  }
}
export default Day;