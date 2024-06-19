import React from "react";
import Form from '../components/form.js'
import Clase from "../components/comClase";

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
        this.props.navigates('/gatos')
        try{
            let response = {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Aceppt': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            let res = await fetch('http://localhost:8000/api/info', response);
            let data = await res.json();
            console.log(data);
        }
        catch(error){
            console.log(error)
        }
      };
    render(){
    return(
        <div className="row-auto">
            <div className="col-sm">
                <Clase {...this.state.form}/>
            </div>
            <div className="col-sm">
                    <Form
                    onSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    form={this.state.form}/>
            </div>
        </div>
    )
    }
}