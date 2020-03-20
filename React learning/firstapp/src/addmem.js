import React , {Component} from 'react'

class Add extends Component {
    state = {
        name:null,
        age:null,
        belt:null
    }
    update = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    prevent = (e) =>{
        e.preventDefault()
        this.props.addmem(this.state)
    }
    render(){
        return(
            <div className="forms">
                <form onSubmit={this.prevent}>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" onChange={this.update} />
                    <label htmlFor="age">Age : </label>
                    <input type="text" id="age" onChange={this.update} />
                    <label htmlFor="belt">Belt Color : </label>
                    <input type="text" id="belt" onChange={this.update} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Add