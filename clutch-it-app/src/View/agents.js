import React from 'react'
import controller from '../Resources/controller.png'
import sentinel from '../Resources/sentinel.png'
import initiator from '../Resources/initiator.png'
import duelist from '../Resources/duelist.png'
import './agents.css'

function agents() {
  return (
    <div className='agents'>
        <h1 className="title1"> <u>AGENT TYPES</u></h1>
        <div>
            <h2 className="title2">CONTROLLER</h2>
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