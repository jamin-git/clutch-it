import React from 'react'
import controller from '../Resources/controller.png'
import sentinel from '../Resources/sentinel.png'
import initiator from '../Resources/initiator.png'
import duelist from '../Resources/duelist.png'
import './agents.css'


const agents = () => {
  return (
    <div className='agents'>
      <div>
        <h1 className="title1"> <u>AGENT TYPES</u></h1>
      </div>
        <h2 className="controller">CONTROLLER </h2>
        
        <img className='image' src={controller} style={{}}/>
        
        <img className='image' src={sentinel} style={{}}/>

      <div>
        <h2 className="initiator">INITIATOR</h2>
        <img className='image' src={initiator} style={{}}/>
        <img className='image' src={duelist} style={{}}/>
      </div>
    </div>
  )
}

export default agents