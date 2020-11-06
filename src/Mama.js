import React, {Component} from 'react';
import Mama from './Nombre';
class Mama extends Component(){
    render(){
    const{M}=this.props
    return(
        <div>
            <div>
                Mama{this.props.M}
            </div>
            <Nombre nombre={Dayana}/>
        </div>
    );
    }
}
export default Mama;