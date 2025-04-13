
import React from "react";
import {useState, useEffect } from "react"
import './../styles/App.css';

const App = () => {
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
      <p>`You have been on this page for {count} seconds.`</p>
    </div>
  )
}

export default App

///////
import {useState, useEffect } from "react"
export default function App() {
    const [count , setCount]=useState(0)
    useEffect(()=>{
        const interval= setInterval(()=>{
            setCount((c)=>c+1)
        },1000)

        return ()=> clearInterval(interval)
    },[])

    
  return <div>
      <h1>Hello world</h1>
      <h3>Count: {count}</h3>
  </div>
}

