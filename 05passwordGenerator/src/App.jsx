import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

function App() {
  const[length, setLength]=useState(8)
  const[numberAllowed, setNumberAllowed]=useState(false);
  const[charAllowed, setCharAllowed]=useState(false)
  const[password, setPassword]=useState("")

  const passwordRef= useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length + 1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length, numberAllowed,charAllowed, setPassword])


  const copyPasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed,charAllowed, setPassword])
  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 mb-4 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-xl overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordtoClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className='flec text-sm gap-x-2'>
          <div className='flex items-center gap-x-3'>
            <input type='range' name='' id=''
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev);
              }}/>
              <label htmlFor='numberInput'>Numbers</label>

              <input
              type='checkbox'
              defaultChecked={charAllowed}
              id="charInput"
              onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }}/>

              <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
