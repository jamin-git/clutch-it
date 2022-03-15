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
        <h1 className="title"> <u>AGENT TYPES</u></h1>
      </div>
      <div class="flexbox-container">
        <h2 className="controller">CONTROLLER</h2>
        <h2 className="sentinel">SENTINEL</h2>
      </div>
      <img className='image' src={controller} style={{}}/>
      <img className='image' src={sentinel} style={{}}/>
      <div class="flexbox-container">
        <h2 className="initiator">INITIATOR</h2>
        <h2 className="duelist">DUELIST</h2>
      </div>
      <img className='image' src={initiator} style={{}}/>
      <img className='image' src={duelist} style={{}}/>
    </div>
  )
}

export default agents