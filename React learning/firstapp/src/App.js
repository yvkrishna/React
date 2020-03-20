import React , {Component} from 'react';
import Comp from './1stcomponent'
import Add from "./addmem"
class App extends Component{
  state = {comp:[
    {name:"yvk",age:19,belt:"black",id:1},
    {name:"ykn",age:17,belt:"green",id:2},
    {name:"yln",age:52,belt:"blue",id:3}
  ]};
  addmem = (data) =>{
    data.id=Math.random()
    let newdata=[...this.state.comp,data]
    this.setState({
      comp:newdata
    })
  }
  deletemem = (id) =>{
    let mems = this.state.comp.filter(ab =>{
      return ab.id!==id
    })
    this.setState({
      comp:mems
    })
  }
  render(){
  return (
    <div className="App">
        <h1>My First React app !</h1>
        <p>Happy codding !!!</p>
        <Comp data={this.state.comp} deletemem={this.deletemem} />
        <Add addmem={this.addmem}/>
    </div>
  );
}
}

export default App;
