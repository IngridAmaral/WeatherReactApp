import Day from './Day.js'
import DaysInformations from './DaysInformations.js'
import React, { Component } from 'react';

class WeatherDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
        info: [],
        showPopup: false,
        dayId: null,
        };
    }

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=Berlin,deid=524901&APPID=9da7f2b391643ec2e3f6e8fbdd752534')
           .then(response => {
           return response.json()
         })
         .then(data => {
           // Work with JSON data here       
           const usefulInfo = data.list.map((curr, idx) => {
               const date = new Date(curr.dt * 1000)
               const dateMili = curr.dt
               const dateOnly = date.getDate()
               const dateAndHours = curr.dt_txt
               const fellsLike = temperatureConverter(curr.main.feels_like)
               const humidity = curr.main.humidity
               const temperature = temperatureConverter(curr.main.temp)
               const tempMin = temperatureConverter(curr.main.temp_min)
               const tempMax = temperatureConverter(curr.main.temp_max)
               const weather = curr.weather[0].main
               const weatherDescription = curr.weather[0].description

               function temperatureConverter(valNum) {
                   return Math.floor(parseFloat(valNum)-273.15)+'°C';
               }
       
               return {date, dateOnly, dateAndHours, dateMili, tempMin, tempMax, temperature, fellsLike, humidity, weather, weatherDescription}
           })
           //....

           this.setState({ info: usefulInfo })
         })

         
    }

    handleClick = (e) => {
        const day = e.target.id
        this.setState({
            showPopup: !this.state.showPopup,
            dayId: day,
        });
    }

    render() { 
       const weekWeather = []
       const weather = (this.state.info).forEach((curr, idx, info) => {
                //console.log()
                const next = idx < info.length-1 ? info[idx+1].date.getDate() : ''
                if (curr.date.getDate() !== next) {
                    weekWeather.push(curr)
                } 
        })  

        return (
            <div className="App-display">
                {weekWeather.map((curr, idx) => {
                    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                    return <Day 
                                onClick={this.handleClick.bind(this)}
                                id={curr.dateOnly}
                                {...curr} 
                                weekDay={days[curr.date.getDay()]} 
                                key={curr.dateMili} 
                                info={this.state.info} />
                })}
                {this.state.showPopup ? 
                <DaysInformations 
                    state={this.state}
                    info={this.state.info}
                    text='x'
                    closePopup={this.handleClick.bind(this)}
                />
                : null
                }
            </div>
        )
    }
}
export default WeatherDisplay;
