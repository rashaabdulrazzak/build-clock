import React from 'react';
import './App.css';
import Clock from './Clock'

class App extends React.Component {
constructor() {
  super()
  this.state = {
    clockIDs: [1,2]  }
}
handleAdd =()=>{
  let array = this.state.clockIDs
  array.push(array.length+1)
  this.setState({clockIDs: array})
}
  render() {
    return (
      <div>       
          {this.state.clockIDs.map(id=><Clock key={id} />)}
          <button onClick={this.handleAdd}>Add New clock </button>          
      </div> 
     
    );
  
  }
}

export default App;
