import React ,{Component} from 'react';
import UI from "./TodoUI"
import AddTodo from "./addTodo"

class App extends Component{
  state={
    todos:[
      {id:1,content:"Buy Some Milk"},
      {id:2,content:"play cricket"}
    ]
  }
  updateState = (data) =>{
    var last_id = this.state.todos[this.state.todos.length-1].id
    data.id=last_id+1;
    let finalData = [...this.state.todos,data]
    this.setState({
      todos:finalData
    })
  }
  render(){
  return (
    <div className="App">
    <h1 className="center blue-text" >Todo's</h1>
      <UI data={this.state.todos} />
      <AddTodo updateList={this.updateState}/>
    </div>
  );
}}

export default App;
