import React from 'react';
import Div from '../Div';
import './funfact.scss';
import parse from 'html-react-parser';

export default function FunFact({variant, title, subtitle, data}) {
  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}`: 'cs-funfact_wrap'}>
      
      <Div>
        <h3 style={{textAlign: 'center'}}>{title}</h3>
        <p style={{textAlign: 'justify'}}>{parse(subtitle)}</p>
      </Div>
    </Div>
  );
}
