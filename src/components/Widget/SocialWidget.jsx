import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link to='https://github.com/benrover-24' className="cs-center">
        <Icon icon="fa6-brands:github" />
      </Link>
      <Link to='https://bj.linkedin.com/company/tekbot-robotics' className="cs-center">
        <Icon icon="fa6-brands:linkedin" />               
      </Link>
    </Div>
  )
}
