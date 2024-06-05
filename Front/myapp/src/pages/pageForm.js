import React from "react";
import Form from '../components/form'
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
            form: {[e.target.name]: e.target.value }
        });
      };
    render(){
    return(
        <div className="row-auto">
            <div className="col-sm">
                <Clase {...this.state.form}/>
            </div>
            <div className="col-sm">
                    <Form
                    handleChange={this.handleChange}
                    form={this.state.form}/>
            </div>
        </div>
    )
    }
}