import React, { Component } from 'react';

class Day extends Component {
  render() {
      //date, dateMili, tempMin, tempMax, temperature, weather, weatherDescription
      
      //console.log(this.props.date.getDay(), days, weekDay)

      const image = () => {
          if (this.props.weatherDescription === 'broken clouds') {
              return 'https://cdn3.iconfinder.com/data/icons/weather-344/142/sunny-512.png'
          } else if (this.props.weatherDescription === 'overcast clouds') {
              return 'https://cdn3.iconfinder.com/data/icons/weather-344/142/cloudy-512.png'  
          } else if (this.props.weatherDescription === 'few clouds') {
              return 'https://cdn3.iconfinder.com/data/icons/weather-344/142/cloud-512.png'  
          } else if (this.props.weatherDescription === 'ligth rain') {
            return 'https://cdn3.iconfinder.com/data/icons/weather-344/142/rain-512.png'
          } else if (this.props.weatherDescription === 'clear sky') {
            return 'https://cdn3.iconfinder.com/data/icons/weather-344/142/sun-512.png'
          } else {
            return 'https://cdn3.iconfinder.com/data/icons/weather-344/142/sunny-512.png'
          }
      }

      return (
      <div className='day' onClick={this.props.onClick} id={this.props.id}>
        <p>{this.props.weekDay}</p>
        <img src={image()} alt={this.props.dateMili} />
        <div>
        <p>{this.props.temperature}</p>
        </div>  
      </div>
    )    
  }
}
export default Day;