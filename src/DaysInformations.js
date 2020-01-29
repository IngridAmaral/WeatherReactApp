import React, { Component } from 'react'
import HeaderPopup from './HeaderPopup';
import InformationPopup from './InformationPopup';

class DaysInformations extends Component {
    render() {
        const { daysEach, closePopup, dayId, handleNextDay } = this.props
        const fullDate = daysEach[dayId][0].fullDate;
        const opacity = {
            opacity: '1',
            visibility: 'visible'
        }

        return (
            <div className='popup'  style={opacity} >
                <div className='popup_inner'>
                    <div className='informationsDay'>
                        <HeaderPopup 
                            closePopup={closePopup} 
                            fullDate={fullDate} 
                            dayId={dayId} 
                            handleNextDay={handleNextDay}
                            weekDay={daysEach[dayId][0].weekDay} 
                        />
                        <InformationPopup 
                            daysEach={daysEach} 
                            dayId={dayId} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DaysInformations