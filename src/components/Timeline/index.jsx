import React from 'react'
import Div from '../Div'
import './timeline.scss'

export default function Timeline({columnData}) {
  return (
    <>
      {columnData.map((item,index)=>(
        <Div className="cs-time_line cs-style1" key={index} style={{marginRight:'30px'}}>
          <h2 className="cs-accent_color">{item.title}</h2>
          <p style={{textAlign: 'justify'}}>{item.text}</p>
        </Div>
      ))}
    </>
  )
}
