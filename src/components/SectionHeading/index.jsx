import React from 'react'
import parse from 'html-react-parser';
import Button from '../Button'
import Spacing from '../Spacing'
import Div from '../Div';

export default function SectionHeading({title, subtitle, btnLink, btnText, variant, children}) {
  console.log(String(variant).includes("text-center"));
  return (
    <Div className={variant ? `cs-section_heading ${variant}` : `cs-section_heading cs-style1`}>
      {String(variant).includes("text-center") ? <div className='d-inline'
      style={{
        width: '20px',
        height: '5px',
        backgroundColor: '#c66948',
        marginLeft: '7px',
        verticalAlign: 'middle'
      }}
    /> : ''}
    <h3 className="cs-section_subtitle d-inline" style={{verticalAlign: 'middle'}}>{parse(subtitle)}</h3>
    <div className='d-inline-block'
      style={{
        width: '20px',
        height: '5px',
        backgroundColor: '#c66948',
        marginLeft: '7px',
        verticalAlign: 'middle'
      }}
    />
      <h2 className="cs-section_title">{parse(title)}</h2>
      {children}
      {btnText && (
        <>
          <Spacing lg='45' md='20'/>
          <Button btnLink={btnLink} btnText={btnText}/>
        </>
      )}
    </Div>
  )
}
