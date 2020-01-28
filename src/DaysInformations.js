import React, { Component } from 'react'
import HeaderPopup from './HeaderPopup';
import InformationPopup from './InformationPopup';

class DaysInformations extends Component {
    render() {
        const { daysEach, closePopup, dayId, handleNextDay } = this.props
        const fullDate = daysEach[dayId][0].fullDate
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className='informationsDay'>
                        <HeaderPopup onClickBtn={closePopup} fullDate={fullDate} handleNextDay={handleNextDay} />
                        <InformationPopup daysEach={daysEach} dayId={dayId} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DaysInformations