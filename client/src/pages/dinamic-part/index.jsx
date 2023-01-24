import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'
import Search from '../../component/input-search'
import { Link } from 'react-router-dom'
const Customers = () => {
    const[customer,setCustomer]=useState([])
    const[byId,setById]=useState([])

    const getData =async()=>{
        let data=await axios.get('http://localhost:8000/notary')
        setCustomer(await data.data)
    }
    useEffect(() => {
    getData()
    }, [])



  return (
    <div className='all'>
        <div className='staticTitle'><h1>Happy Customers</h1></div>
       <Search setCustomer={setCustomer}/>
        <div className='allCard'>
            {customer.map((el)=>{
                return(
                   <Link to={`home-page/${el._id}`}>
                    <div className='card'>
                        <div className='cardimg'><img src={el.img} alt="" /></div>
                        <div className='cardtext'>
                            <h3>{el.title}</h3>
                            <p>{el.description}</p>
                        </div>
                       
                    </div>
                   </Link>
                    
                )
            })}
        </div>
    </div>
  )
}

export default Customers