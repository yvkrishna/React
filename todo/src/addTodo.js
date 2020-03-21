import React ,{Component} from 'react';

class AddTodo extends Component{
    state = {
        id:null,
        content:null
    }
    update = (e) =>{
        e.preventDefault()
        this.props.updateList(this.state)
    }
    change =(e) =>{
        this.setState({
            id:Math.random(),
            content:e.target.value
        })
    }
    render(){
        return(
            <div className="FormData">
                <form onSubmit={this.update}>
                    <input type="text" onChange={this.change} placeholder="Enter A Todo" />
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
export default AddTodo