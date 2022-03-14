import React from 'react'
import LottieControl from './Scroll.tsx'

export default function App() {
  return [
    <div style={{height: "5000px", width: "100vw",  backgroundColor: "#111"}}>
      <div style={{width: "100%", height: "auto",  position: "fixed", top:0, left: 0,}}>
    <LottieControl />
    </div>
    </div>

  ]
}
