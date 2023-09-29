import { useState, useCallback, useEffect } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAlllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("")


  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAlllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*(){}[]~`:<>?.,;'";
    }

    for (let i = 1; i < length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass);
  },[length,numberAlllowed,charAllowed,setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length,numberAlllowed,charAllowed,setPassword])
  
  
  return (
    <>
      <div className='w-ful max-w-md mx-auto shodow-md rounded-lg p-4 m-8 text-orange text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)
              }}  
            />
            <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAlllowed}
              id='numberInput'
              onChange={()=>{
                setNumberAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>   {/* htmlfor connects the label and input */}
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }}
            /> 
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
