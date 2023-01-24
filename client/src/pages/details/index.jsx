import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './index.scss'
const Detail = () => {
    const[detail,setDetail]=useState([])
    const navigate = useNavigate()
    const {_id}=useParams()
    const getData =async()=>{
        let data = await axios.get(`http://localhost:8000/notary/${_id}`)
        setDetail( await data.data)
    }
    useEffect(() => {
    getData()
    }, [])
    
    const handleDelete=(_id)=>{
        axios.delete(`http://localhost:8000/notary/${_id}`)
        let newList = byId.filter((q)=>q._id !== _id)
        setById(newList)
        navigate(-1)
    }
  return (
    <div className='detail'>
        <div className='detailImg'><img src={detail.img} alt="" /></div>
        <div className='detailText'>
            <h1>{detail.title}</h1>
            <p>{detail.description}</p>
            <h3>{detail.price} $</h3>
        </div>
        <button className='backBtn' onClick={()=>navigate('/')}>Go back</button>
        <button onClick={()=>handleDelete(_id)} className='backBtn1'>Delete</button>
    </div>
  )
}

export default Detail