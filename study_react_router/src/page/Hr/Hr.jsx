import React from 'react'
import './hr.css'

export default function Hr(props) {
  return <div className='hr-wrap'>
            <div className='line'><span>{props.title? props.title: '分割线'}</span></div>
        </div>
}