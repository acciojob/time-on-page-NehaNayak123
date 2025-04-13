
import React, { useState, useEffect } from "react";
import './../styles/App.css';

function App(){
  const [count, setCount]=useState(0);
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCount((c)=>c+1)
    },1000)

    return ()=>clearInterval(interval)
  },[])
  return (
    <div>
        {/* Do not remove the main div */}
      //<p>`You have been on this page for {count} seconds.`</p>
      //<p>`You\'ve been on this page for 0 seconds.`</p>
      <p>You\'ve been on this page for {count} seconds.</p>
    </div>
  )
}

export default App

