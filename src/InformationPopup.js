import React, { Component } from 'react'

class InformationPopup extends Component {
    render () {
        return (
            <div className='informationPopup'> 
                {this.props.eachHourInformation.map((curr, idx, info) => {
                    console.log(curr)
                    return <div className='hour-info' id={curr.dateAndHours.split(' ')[1]} key={curr.dateMili} > 
                            <img src={this.props.images[idx]} className='nanoImg' />
                            <p>{curr.dateAndHours.split(' ')[1]}</p>
                           </div>
                })}
            </div>      
        )
    }
}

export default InformationPopup 