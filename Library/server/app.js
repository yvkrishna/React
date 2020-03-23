const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app=express();
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

