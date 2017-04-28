import React from 'react'
import { Route } from 'react-router-dom'
import Awesome from './containers'

const router = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Awesome}/>
    </div>
  )
}

export default router
