import React, {Component} from 'react';
import Mama from './Operaciones';
class Primo extends Component(){
    render(){
    const{primo}=this.props
    return(
        <div>
            <div>
                Primo{this.props.primo}
            </div>
            <Operaciones Operaciones={"Multiplicacion"}/>
        </div>
    );
    }
}
export default Primo;