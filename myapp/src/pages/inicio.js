import React from 'react'
import Button from '../components/comButton'

export default class Inicio extends React.Component{
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    console.log('Click')
  }
  render(){
    return(
      <div className='flex justify-center items-center flex-column'>
        <button className='bg-red-300 w-20 h-12 rounded text-large font-semibold m-2' onClick={this.handleClick}>Click</button>
        <Button/>
      </div>
    )
  }
}