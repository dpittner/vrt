import React from 'react'
import { getSiteProps } from 'react-static'
//
import logoImg from '../logo.png'

export default getSiteProps(() => (
  <div id="home">
    <h1 id="something" style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
  </div>
))
