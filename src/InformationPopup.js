import React, { Component } from 'react'

class InformationPopup extends Component {
    render () {
        const hourStyle = {display: 'flex'}

        return (
            <div className='informationPopup'> 
                {this.props.daysEach[this.props.dayId].map((curr, idx, info) => {
                    return <div className='hour-info' id={curr.dateOnly} key={curr.dateMili} > 
                                <div style={hourStyle} className='hour-info-each'>
                                    <img src={curr.image} className='nanoImg' />
                                    <p>{curr.dateAndHours.split(' ')[1]}</p>
                                </div>
                                <p className='hour-info-each'>{curr.temperature}</p>
                                <p className='hour-info-each'>{curr.fellsLike}</p>
                                <p className='hour-info-each'>{curr.humidity}</p>
                            </div>
                })}
            </div>      
        )
    }
}

export default InformationPopup 