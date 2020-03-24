import React , {Component} from 'react';
import {graphql} from "react-apollo"
import {flowRight as compose} from 'lodash';
import {getAuthorsQuery,addBookMutation,getBooksQuery} from "../quries/quries"

class AddBook extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            genre:"",
            authorId:""
        }
    }
    displayAuthors(){
        var data = this.props.getAuthorsQuery;
        console.log(data);
        if(data.loading){
            return(<option disabled>Loading Authors</option>)
        }else{
            return data.authors.map(authors =>{
                return (<option key={authors.id} value={authors.id} >{authors.name}</option>)
            })
        }
    }
    namechange = (e) =>{
        this.setState({
            name:e.target.value
        });
    }
    changegenre = (e) =>{
        this.setState({
            genre:e.target.value
        });
    }
    changeauthor = (e) =>{
        this.setState({
            authorId:e.target.value
        });
    }
    submitform(e){  
        e.preventDefault();
        this.props.addBookMutation({
            variables:{
                name:this.state.name,
                genre:this.state.genre,
                authorId:this.state.authorId
            },
            refetchQuries:[{query:getBooksQuery}]
        })
    }
  render(){
    return (
      <div>
          <form id="add-book" onSubmit={this.submitform.bind(this)}>
            <div className="field">
                <label>Name : </label>
                <input type="text" onChange={this.changename} />
            </div>
            <div className="field">
                <label>Genre : </label>
                <input type="text" onChange={this.changegenre} />
            </div>
            <div className="field">
                <label>Select author : </label>
                <select onChange={this.changeauthor}>
                    {this.displayAuthors()}
                </select>
            </div>
            <button>+</button>
          </form>
      </div>
    );
  }
}


export default compose(
    graphql(getAuthorsQuery,{name:"getAuthorsQuery"}),
    graphql(addBookMutation,{name:"addBookMutation"})
)(AddBook);