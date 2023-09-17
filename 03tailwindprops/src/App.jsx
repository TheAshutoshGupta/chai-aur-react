import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>tailwindcss</h1>
      <Card username="Ashutosh"/>
      <Card username="aashu"/>
    </>
  )
}

export default App
