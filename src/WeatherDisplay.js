import Day from './Day.js'
import DaysInformations from './DaysInformations.js'
import React, { Component } from 'react';
import { getNodeText } from '@testing-library/react';

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
               const humidity = curr.main.humidity+'%'
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
        const idxId = e.target.id
        this.setState((state) => ({
            showPopup: !this.state.showPopup,
            dayId: idxId,
        }));
    }

    handleNextDayClick = (e) => {
        console.log(e.target.id)
    }

    render() { 
       let equalDaysErase = []
       let daysEach = []
       const weather = (this.state.info).forEach((curr, idx, info) => {
                const nextDay = idx < info.length-1 ? info[idx+1].dateOnly : ''       
                if (curr.dateOnly == nextDay) {  
                    if (curr.weatherDescription === 'broken clouds') {
                        curr.image = 'https://cdn3.iconfinder.com/data/icons/weather-344/142/sunny-512.png'
                    } else if (curr.weatherDescription === 'overcast clouds') {
                        curr.image = 'https://cdn3.iconfinder.com/data/icons/weather-344/142/cloudy-512.png'
                    } else if (curr.weatherDescription === 'few clouds') {
                        curr.image = 'https://cdn3.iconfinder.com/data/icons/weather-344/142/cloud-512.png'
                    } else if (curr.weatherDescription === 'light rain') {
                        curr.image = 'https://cdn3.iconfinder.com/data/icons/weather-344/142/rain-512.png'
                    } else if (curr.weatherDescription === 'clear sky') {
                        curr.image = 'https://cdn3.iconfinder.com/data/icons/weather-344/142/sun-512.png'
                    } else if (curr.weatherDescription === 'moderate rain') {
                        curr.image = 'https://cdn3.iconfinder.com/data/icons/weather-344/142/rain-512.png'
                    }else {
                        curr.image = 'https://cdn3.iconfinder.com/data/icons/weather-344/142/sunny-512.png'
                    } 
                    curr.fullDate = curr.dateAndHours.split(' ')[0]                       
                    equalDaysErase.push(curr)
                } else {
                    daysEach.push(equalDaysErase)
                    equalDaysErase = []
                }                
        })     
        
        return (
            <div className="App-display">
                {daysEach.map((curr, idx) => {
                    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                    //console.log(curr.dateOnly)
                    return <Day 
                                onClick={this.handleClick.bind(this)}
                                id={idx}
                                {...curr[0]}                                 
                                weekDay={days[curr[0].date.getDay()]} 
                                key={curr[0].dateMili} 
                                info={this.state.info}
                                image={curr[0].image} />
                })}
                {this.state.showPopup ? 
                <DaysInformations 
                    handleNextDay={this.handleNextDayClick.bind(this)}
                    daysEach={daysEach}
                    dayId={this.state.dayId}
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
