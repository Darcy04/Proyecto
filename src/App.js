import React , {Component} from 'react';
import Operaciones from './Operaciones';
import './App.css';

class App extends Component(){
rener(){
  const {app}=this.props
  return(
    <div>
      <div>
        Holis Bebesitos{this.props.app}
      </div>
    <Operaciones clave={"Puerto Berrio"}/>
    </div>
  );
}
}
export default App;