import Day from './Day.js'
import DaysInformations from './DaysInformations.js'
import React, { Component } from 'react';

class WeatherDisplay extends Component {
        state = {
            info: [],
            showPopup: false,
            dayId: null,
            daysEach: []
        };
      
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
        let stateday = this.state.dayId
        if (e.target.id === 'next') {
            stateday < 5 ? stateday++ : stateday = 0;
        } else {
            stateday > 0 ? stateday -- : stateday = 5;
        }
        this.setState({dayId: stateday})
    }

    render() { 
       let equalDaysErase = []
       let daysEach = []
       const weather = (this.state.info).forEach((curr, idx, info) => {
                const nextDay = idx < info.length-1 ? info[idx+1].dateOnly : ''  
                //console.log(curr.dateOnly, nextDay, idx, idx == 0, curr.dateOnly !== nextDay)
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
                
                const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                curr.weekDay = days[curr.date.getDay()]

                if (idx == 0 && curr.dateOnly !== nextDay){
                    equalDaysErase.push(curr)
                    daysEach.push(equalDaysErase)
                    equalDaysErase = []
                }else if (curr.dateOnly === nextDay) {                    
                    equalDaysErase.push(curr)
                } else {
                    daysEach.push(equalDaysErase)
                    equalDaysErase = []
                }                         
        })   

        console.log(daysEach)
        
        return (
            <div className="App-display">
                {daysEach.map((curr, idx, days) => {
                        return <Day 
                                    onClick={this.handleClick.bind(this)}
                                    id={idx}
                                    {...curr[0]} 
                                    daysEach={curr}                                
                                    weekDay={curr[0].weekDay} 
                                    key={curr[0].dateMili} 
                                    info={this.state.info}
                                    image={curr[0].image} />

                })}
                {this.state.showPopup ? 
                <DaysInformations 
                    handleNextDay={this.handleNextDayClick}
                    daysEach={daysEach}
                    dayId={this.state.dayId}
                    closePopup={this.handleClick}
                />
                : null
                }
            </div>
        )
    }
}
export default WeatherDisplay;
