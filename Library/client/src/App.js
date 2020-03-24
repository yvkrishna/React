import React , {Component} from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo"

//components
import BookList from "./components/booklist"
import AddBook from "./components/addBook"
//apollo client setup 
const client = new ApolloClient({
  uri:"http://localhost:8008/graphql"
});

class App extends Component{
  render(){
    return (
      <ApolloProvider client={client}>
      <div id="main">
          <h1>Welcome to The Library</h1>
          <BookList />
          <AddBook />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
