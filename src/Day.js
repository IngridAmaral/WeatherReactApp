import React, { Component } from 'react';

class Day extends Component {
  render() {
    let tempMin = 1000;
    let tempMax = -1000;
    const findTempMinAndMax = this.props.daysEach.forEach(hour => {
       if(tempMin > hour.tempMin.replace('°C', '')) {
        tempMin = hour.tempMin.replace('°C', '')
       };

       if(tempMax < hour.tempMax.replace('°C', '')) {
        tempMax = hour.tempMax.replace('°C', '')
       };       
    });
    console.log(tempMin)
    console.log()
      return (
      <div className='day' onClick={this.props.onClick} id={this.props.id}>
        <p>{this.props.weekDay}</p>
        <img src={this.props.image} alt={this.props.dateMili} />
        <div>
        <p>{this.props.temperature}</p>
        <p className='min-max'>min {tempMin+'°C'} / max {tempMax+'°C'}</p>
        </div>  
      </div>
    )    
  }
}
export default Day;