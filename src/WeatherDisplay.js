import React from 'react';
import Day from './Day.js'

function WeatherDisplay (){
    const weatherInfos = [
        {id: 'day01', temp: 25, sky: 'sunny', week: 'Sunday'},
        {id: 'day02', temp: 25, sky: 'sunny', week: 'Sunday'},
        {id: 'day03', temp: 25, sky: 'sunny', week: 'Sunday'},
        {id: 'day04', temp: 25, sky: 'sunny', week: 'Sunday'},
        {id: 'day05', temp: 25, sky: 'sunny', week: 'Sunday'},
        {id: 'day06', temp: 25, sky: 'sunny', week: 'Sunday'},
        {id: 'day07', temp: 25, sky: 'sunny', week: 'Sunday'},
      ]

    return (
      <div className="App-display">
          {weatherInfos.map(curr => {
              return <Day {...curr} />
          })}
      </div>
    )
}
export default WeatherDisplay;