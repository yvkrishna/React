import React ,{Component} from 'react';
import UI from "./TodoUI"
class App extends Component{
  state={
    todos:[
      {id:1,content:"Buy Some Milk"},
      {id:2,content:"play cricket"}
    ]
  }
  render(){
  return (
    <div className="App">
      <UI data={this.state.todos} />
    </div>
  );
}}

export default App;
