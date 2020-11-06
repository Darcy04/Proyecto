import React, {Component} from 'react';
import Mama from './Mama';
class Apodo extends Component(){
    render(){
        const{M}=this.props
    return(
        <div>
            <div>
                Apodo
            </div>
            <Mama M={"Norelia"}/>
        </div>
    );
    }
}
export default Apodo;