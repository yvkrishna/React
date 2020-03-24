import {gql} from "apollo-boost"

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`
const getBookQuery = gql`
    query($id:ID!){
        book(id:$id){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    name
                    id
                }
            }
        }
    }
`

const addBookMutation = gql`
        mutation($name:String!,$genre:String!,$authorId:String!){
            addbook(name:$name,genre:$genre,authorId:$authorId){
                name
                id
            }
        }
`

export {getAuthorsQuery,getBooksQuery,getBookQuery,addBookMutation}