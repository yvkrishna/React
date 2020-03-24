import React , {Component} from 'react';
import {graphql} from "react-apollo"
import {getBookQuery} from "../quries/quries"

class BookDetails extends Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <p>Book Details</p>
      </div>
    );
  }
}

export default graphql(getBookQuery,{
  options:(props) =>{
    return{
      variables:{
        id:props.bookid
      }
    }
  }
})(BookDetails);