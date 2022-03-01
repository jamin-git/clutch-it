import React from 'react'
import controller from './controller.png'
import sentinel from './sentinel.png'
import initiator from './initiator.png'
import duelist from './duelist.png'

function agents() {
  return (
    <div className='agents'>
        <h1 style={{color:'#88CDFF', fontSize: 100}}>AGENT TYPES</h1>
        <div>
            <h2 style={{color:'#FFF9C8', fontSize: 60}}>CONTROLLER</h2>
            <img src={controller} style={{padding: 60}}/>
            <img src={sentinel} style={{padding: 60}}/>
        </div>
        <div>
            <img src={initiator} style={{padding: 60}}/>
            <img src={duelist} style={{padding: 60}}/>
        </div>
    </div>
  )
}

export default agents