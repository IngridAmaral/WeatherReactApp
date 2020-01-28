import React, { Component } from 'react'

class HeaderPopup extends Component {
    render () {
        const { handleNextDay, onClickBtn, fullDate, dayId } = this.props
        return (
            <div className='headerPopup'>
                <div className='button-and-date-headerpopup'>
                    <div className='datePopup'>
                            <img className='arrow-icon' src='https://image.flaticon.com/icons/svg/126/126492.svg' id='previous' onClick={handleNextDay} />
                            <p>{fullDate}</p>
                            <img className='arrow-icon' src='https://image.flaticon.com/icons/svg/126/126490.svg' id='next' onClick={handleNextDay} />
                    </div>
                    <div className='buttonPopup'>
                        <button onClick={onClickBtn}>x</button>
                    </div>
                </div>
                <div className='infos'>
                    <p className='infos-p'>Hours</p>
                    <p className='infos-p'>Temperature</p>
                    <p className='infos-p'>Fells Like</p>
                    <p className='infos-p'>Humidity</p>
                </div>
            </div> 
        )
    }
}

export default HeaderPopup;