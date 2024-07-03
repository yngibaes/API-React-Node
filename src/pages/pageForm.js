import React from "react";
import TarjeForm from "../components/TarjeForm.js";
import url from '../config';

export default class PageForm extends React.Component{
    state={
        form:{
            name:'',
            descri:'',
            img:''
        }
    }
    handleChange = (e) => {
        /* HARD CODE
            console.log(`${e.target.name}:${e.target.value}`)
            let datos={}
            datos[e.target.name]=e.target.value
            this.setState(datos) */
        this.setState({ 
            form: {...this.state.form,
                [e.target.name]: e.target.value }
        });
      };
    handleSubmit = async (e) => {
        e.preventDefault()
        this.props.navigate('/gatos')
        try{
            let response = {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Aceppt': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            let res = await fetch(`${url}/info`, response); //Llamar a la función useFetch.);
            let data = await res.json();
            console.log(data);
        }
        catch(error){
            console.log(error)
        }
      };
    render(){
        return  <TarjeForm
                onSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                form={this.state.form}/>
    }
}