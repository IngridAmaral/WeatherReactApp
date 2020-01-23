import Day from './Day.js'
import React, { Component } from 'react';

class WeatherDisplay extends Component {
    state = {
        info: [],
    }

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=Berlin,deid=524901&APPID=9da7f2b391643ec2e3f6e8fbdd752534')
           .then(response => {
           return response.json()
         })
         .then(data => {
       
           // Work with JSON data here
           //console.log(data.list.map(data);
       
           const usefulInfo = data.list.map((curr, idx) => {
               const date = new Date(curr.dt * 1000)
               const dateMili = curr.dt
               const temperature = temperatureConverter(curr.main.temp)
               const tempMin = temperatureConverter(curr.main.temp_min)
               const tempMax = temperatureConverter(curr.main.temp_max)
               const weather = curr.weather[0].main
               const weatherDescription = curr.weather[0].description

               function temperatureConverter(valNum) {
                   return Math.floor(parseFloat(valNum)-273.15)+'°C';
               }
       
               return {date, dateMili, tempMin, tempMax, temperature, weather, weatherDescription}
           })
           //....

           this.setState({ info: usefulInfo })
         })
         
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

        console.log(this.state.info)

       //date, dateMili, tempMin, tempMax, temperature, weather, weatherDescription

        return (
            <div className="App-display">
                {weekWeather.map((curr, idx) => {
                    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                    return <Day {...curr} weekDay={days[curr.date.getDay()]} key={curr.dateMili} />
                })}
            </div>
        )
    }
}
export default WeatherDisplay;
