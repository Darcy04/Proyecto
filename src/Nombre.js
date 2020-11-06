import React, {Component} from 'react';
import Mama from './Primo';
class Nombre extends Component(){
    render(){
    const{Nombre}=this.props
    return(
        <div>
            <div>
                Operaciones{this.props.nombre}
            </div>
            <Primo primo={"David"}/>
        </div>
    )
    }
}
export default Nombre;