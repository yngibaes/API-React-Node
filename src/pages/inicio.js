import React from 'react'
import ButtonAdd from '../components/buttonAdd'
import ButtonCard from '../components/buttonCard'

export default class Inicio extends React.Component{
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
/*     return(<div>
      <h1>Le has dado click</h1>
    </div>) */
    window.alert("Has dado click 👍")
  }
  render(){
    return(
      <div className='flex justify-center items-center flex-col mt-8'>
        <h1 className='text-3xl font-bold text-[#4B3F6E] p-3 text-center'>Bienvenido al mundo de las tarjetas</h1>
        <div className='flex'>
          <button className='bg-[#4B3F6E]/85 w-20 h-12 rounded text-large font-semibold m-2 text-white' onClick={this.handleClick}>Click</button>
          <ButtonAdd/>
          <ButtonCard/>
        </div>
      </div>
    )
  }
}