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
const getBook = gql`
    {
        book(id:"5e77811cbcff1b2e40b7d677"){
            name
            id
        }
    }
`
export {getAuthorsQuery,getBooksQuery,getBook}