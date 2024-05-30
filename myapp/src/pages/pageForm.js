import React from "react";
import Form from '../components/form'

export default class PageForm extends React.Component{
    state={
        form:{}
    }
    handleChange = (e) => {
        /* HARD CODE
            console.log(`${e.target.name}:${e.target.value}`)
            let datos={}
            datos[e.target.name]=e.target.value
            this.setState(datos) */
        this.setState({ [e.target.name]: e.target.value });
      };
    render(){
    return(
        <Form
        handleChange={this.handleChange}
        form={this.state.form}/>
    )
    }
}