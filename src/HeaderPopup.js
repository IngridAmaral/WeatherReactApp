import React, { Component } from 'react'

class HeaderPopup extends Component {
    render () {
        const { handleNextDay, closePopup, fullDate, weekDay } = this.props
        return (
            <div className='headerPopup'>
                <div className='button-and-date-headerpopup'>
                    <div className='datePopup'>
                            <div className='arrow-icon' onClick={handleNextDay} id='previous'>                            
                                <img className='arrow-icon-img'
                                    alt='' 
                                    src='https://image.flaticon.com/icons/svg/126/126492.svg' 
                                    id='previous' 
                                     />
                            </div>
                            <p className='header-popup-p'>{weekDay}</p>
                            <p className='header-popup-p'>{fullDate}</p>
                            <div className='arrow-icon' onClick={handleNextDay} id='next'> 
                                <img className='arrow-icon-img'
                                    alt='' 
                                    src='https://image.flaticon.com/icons/svg/126/126490.svg' 
                                    id='next' 
                                     />
                            </div>    
                    </div>
                    <div className='buttonPopup'>
                        <button onClick={closePopup}>x</button>
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