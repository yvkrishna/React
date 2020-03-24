import React , {Component} from 'react';
import {graphql} from "react-apollo"
import {getAuthorsQuery} from "../quries/quries"

class AddBook extends Component{
    displayAuthors(){
        var data = this.props.data;
        if(data.loading){
            return(<option disabled>Loading Authors</option>)
        }else{
            return data.authors.map(authors =>{
                return (<option key={authors.id} value={authors.id} >{authors.name}</option>)
            })
        }
    }
  render(){
    return (
      <div>
          <form id="add-book">
            <div className="field">
                <label>Name : </label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre : </label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Select author : </label>
                <select>
                    {this.displayAuthors()}
                </select>
            </div>
            <button>+</button>
          </form>
      </div>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);