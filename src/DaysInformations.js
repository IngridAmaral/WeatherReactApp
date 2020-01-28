import React, { Component } from 'react'
import HeaderPopup from './HeaderPopup';
import InformationPopup from './InformationPopup';

class DaysInformations extends Component {
    render() {
        const stateInfo = this.props.info
        let fullDate = null;
        let images = []
        let eachHourInformation = []
        const dailyInformation = stateInfo.forEach(curr => {
                if (curr.dateOnly == this.props.state.dayId) {
                    fullDate = curr.dateAndHours.split(' ')[0]

                    if (curr.weatherDescription === 'broken clouds') {
                        images.push('https://cdn3.iconfinder.com/data/icons/weather-344/142/sunny-512.png')
                    } else if (curr.weatherDescription === 'overcast clouds') {
                        images.push('https://cdn3.iconfinder.com/data/icons/weather-344/142/cloudy-512.png')
                    } else if (curr.weatherDescription === 'few clouds') {
                        images.push('https://cdn3.iconfinder.com/data/icons/weather-344/142/cloud-512.png')
                    } else if (curr.weatherDescription === 'ligth rain') {
                        images.push('https://cdn3.iconfinder.com/data/icons/weather-344/142/rain-512.png')
                    } else if (curr.weatherDescription === 'clear sky') {
                        images.push('https://cdn3.iconfinder.com/data/icons/weather-344/142/sun-512.png')
                    } else {
                        images.push('https://cdn3.iconfinder.com/data/icons/weather-344/142/sunny-512.png')
                    }                
                    eachHourInformation.push(curr);
                }
        })

        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className='informationsDay'> 
                        <HeaderPopup onClick={this.props.closePopup} fullDate={fullDate} />
                        <InformationPopup eachHourInformation={eachHourInformation} images={images} />
                    </div> 
                </div>
            </div>        
        )
    }
}

export default DaysInformations