import React from 'react'
import './Loading.css'

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-pulse">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <h2 className="loading-text">Loading...</h2>
    </div>
  )
}

export default Loading
