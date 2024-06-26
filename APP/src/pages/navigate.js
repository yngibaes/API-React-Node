import React from 'react'
import PageForm from '../pages/pageForm'
import { useNavigate } from 'react-router-dom'

const Navigate = () =>{
    const navigate = useNavigate()
    return <PageForm navigate={navigate}/>
}
export default Navigate