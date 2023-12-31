import React, { useEffect, useState } from 'react'
import { useActionData } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData();
    /* const [data,setData]=useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/dksng07')
     .then(resp=>resp.json())
     .then(data=>{
        console.log(data);
        setData(data);
     })
    }, []) */
    
  return (
    <div><div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>Github followers :
    {data.followers}
    <img src={data.avatar_url}/> </div>
    </div>
    
  )
}

export default Github

export const githubinfoLoader=async()=>{
    const response= await fetch('https://api.github.com/users/dksng07')
    return response.json()
}