import React from 'react'
import Form from '../components/form'
import { useNavigate } from 'react-router-dom'

const Navigate=() =>{
    const navigate = useNavigate()
    return <Form navigates={navigate}/>
}
export default Navigate