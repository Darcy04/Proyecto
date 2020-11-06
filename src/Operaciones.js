import React, {Component} from 'react';
import Mama from './App';
import App from './App';
class Operaciones extends Component(){
    render(){
    const{clave}=this.props
    return(
        <div>
            <div>
                Operaciones{this.props.clave}
            </div>
            <App app={"Nice"}/>
        </div>
    );
    }
}
export default Operaciones;