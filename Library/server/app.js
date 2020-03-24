const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");
const app=express();

//allow cross origin requests
app.use(cors())
app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true
}))

app.get('/',function(req,res){
    res.redirect("/graphql");
})
app.listen(8008,function(){
    console.log("Listining on port 8008")
});

