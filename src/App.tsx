import React from 'react'
import LottieControl from './Scroll.tsx'

export default function App() {

  return [
    <div style={{height: "10000px", width: "100vw",  backgroundColor: "#111"}}>

      {/* <div style={{display: "flex", justifyContent: "center"}}>     
       <h1 style={{color: "#fff", textAlign: "Center", marginTop: 0, paddingTop: 150, width: 500}}>Reaching inbox zero has become an impossible task...</h1>
      </div>

      <div style={{display: "flex", justifyContent: "center"}}>     
       <h1 style={{color: "#fff", textAlign: "Center", marginTop: 0, paddingTop: 200, width: 500}}>You’re bombarded with email notifications all day</h1>
      </div>
      <div style={{display: "flex", justifyContent: "center"}} >     
       <h1 ref={textRef} style={{color: "#fff", textAlign: "Center", marginTop: 0, paddingTop: 150, width: 500, zIndex: 100}}>What if there was a way to cut through the noise?</h1>
      </div> */}

      <div style={{width: "100%", height: "auto", position: "fixed", top: 0, left: 0, zIndex: 100, }}>
    <LottieControl />
    </div>
    </div>

  ]
}
