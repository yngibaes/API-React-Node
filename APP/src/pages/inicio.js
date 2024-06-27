import React from 'react'
import Button from '../components/comButton'

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
        <h1 className='text-3xl font-bold text-red-500'>Bienvenido al mundo de las tarjetas</h1>
        <div className='flex'>
          <button className='bg-red-300 w-20 h-12 rounded text-large font-semibold m-2' onClick={this.handleClick}>Click</button>
          <Button/>
        </div>
      </div>
    )
  }
}