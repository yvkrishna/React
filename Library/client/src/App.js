import React , {Component} from 'react';
import ApolloClient from "apollo-boost"

//components
import BookList from "./components/booklist"

class App extends Component{
  render(){
    return (
      <div id="main">
          <h1>Welcome to The Library</h1>
          <BookList />
      </div>
    );
  }
}

export default App;
