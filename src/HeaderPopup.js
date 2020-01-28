import React, { Component } from 'react'

class HeaderPopup extends Component {
    render () {
        return (
            <div className='headerPopup'>
                <div className='buttonPopup'>
                    <button onClick={this.props.onClick}>x</button>
                </div>
                <div className='datePopup'>
                    <p>{this.props.fullDate}</p>
                </div>
            </div> 
        )
    }
}

export default HeaderPopup