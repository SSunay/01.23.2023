import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import axios from 'axios'

const Search = ({setCustomer}) => {
    const[name,setname]=useState([])

    const getData=async()=>{
        let data = await axios.get('http://localhost:8000/notary')
        setname(await data.data)
    }
useEffect(() => {
getData()
}, [])

const handleSearch=(e)=>{
    let newData = name.filter((element)=>
    element.title
    .toLocaleLowerCase()
    .includes(e.target.value.toLocaleLowerCase())
    )
    setCustomer(newData)
}

  return (
    <div>
                <input type="text" className='input'  placeholder='Type here to search' onChange={(e)=>handleSearch(e)}/>
    </div>
  )
}

export default Search