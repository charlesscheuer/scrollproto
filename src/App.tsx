import React from 'react'
import LottieControl from './Scroll.tsx'

export default function App() {
  return [
    <div style={{height: "5000px", width: "100vw",  top:0, left: 0, backgroundColor: "#111"}}>
      <div style={{position: "fixed", top: 0, width: "100%", height: "auto"}}>
    <LottieControl />
    </div>
    </div>

  ]
}
