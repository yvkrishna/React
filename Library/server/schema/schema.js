const graphql = require("graphql");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQlNotNull
} = graphql;
const _ = require("lodash")
var mongojs = require("mongojs");
var db = mongojs("mongodb://vedha:krishna123@cluster0-shard-00-00-kbuhh.mongodb.net:27017/graphql?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin",["book","author"]);
const { ObjectId } = require('mongodb');

//dummy data
var books = [
    {id:"1",name:"My Life",genre:"Reality",authorId:"1"},
    {id:"2",name:"Life is beautiful",genre:"Entertainment",authorId:"2"},
    {id:"3",name:"Desinep Land",genre:"Fantasy",authorId:"3"},
    {id:"4",name:"My New Life",genre:"Reality",authorId:"1"},
    {id:"5",name:"My Life is beautiful",genre:"Entertainment",authorId:"2"},
    {id:"6",name:"Desinep Land in Alice",genre:"Fantasy",authorId:"3"}
];
var author = [
    {id:"1",name:"ghi",age:40},
    {id:"2",name:"def",age:60},
    {id:"3",name:"abc",age:56},
];

const BookType = new GraphQLObjectType({
    name:"Book",
    fields: () => ({
        id: { type:GraphQLID },
        name:{ type:GraphQLString },
        genre:{ type:GraphQLString },
        author:{
            type:AuthorType,
            resolve(parent,args){
                var returnAuthor = new Promise(function(resolve,reject){
                    db.author.find({_id:parent.authorId},function(err,data){
                        if(err){
                            console.log(err);
                            reject();
                        }
                        else{
                            if(data.length>0){
                                resolve(data);
                                }else{reject()}
                        }
                    });
                });
                var returnAuth = returnAuthor.then(function(getdata){
                    return getdata;
                }).catch(()=>{console.log("Error in getting Author Data")})
                return returnAuth;
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name:"Author",
    fields: () => ({
        id: { type:GraphQLID },
        name:{ type:GraphQLString },
        age:{ type:GraphQLInt },
        book:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                var returnBook = new Promise(function(resolve,reject){
                    db.book.find({authorId:parent._id},function(err,data){
                        if(err){
                            console.log(err);
                            reject();
                        }
                        else{
                            if(data.length>0){
                                resolve(data);
                                }else{reject()}
                        }
                    });
                });
                var returnBook = returnBook.then(function(getdata){
                    return getdata;
                }).catch(()=>{console.log("Error in getting Author Data")})
                return returnBook;
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                // var RequiredBook = new Promise(function(resolve,reject){
                    var o_id = ObjectId(args.id);
                    var dataNew =  db.book.find({_id:o_id},async (err,data) => {
                        if(err){
                            console.log(err);
                            //reject("error in sending the book data");
                            }
                        else{
                            //return await new Promise(function(resolve,reject){
                                if(data.length>0){
                                   await resolve(data);
                                }else{reject("data length is ! > 0")}
                           // });
                        }
                    }).then((returnedData)=>{
                        return returnedData;
                    });
                    //var val = dataNew
                //});
                // var dataNew = RequiredBook.then(async function(returnedData){
                //     return await returnedData;
                // }).catch(()=>{
                //     console.log("error occured");
                // })
                // var returnedDatas = dataNew.then((datafromfind)=>{
                //     return datafromfind
                // })
                console.log(val);
                return val;
            }
            },
            author:{
                type:AuthorType,
                args:{id:{type:GraphQLID}},
                resolve(parent,args){
                    var RequiredAuth = new Promise(function(resolve,reject){
                        var o_id = ObjectId(args.id);
                        db.author.find({_id:o_id},function(err,data){
                            if(err){
                                console.log(err);
                                reject();
                            }
                            else{
                                if(data.length>0){
                                    resolve(data);
                                    }else{reject()}
                            }
                        })
                    });
                    var AuthReturn = RequiredAuth.then(function(authdata){
                        return authdata
                    }).catch(()=>{
                        console.log("error in sending the author data")
                    })
                    return AuthReturn;
                }
            },
            books:{
                type:new GraphQLList(BookType),
                resolve(parent,args){
                    var RequiredAllBooks = new Promise(function(resolve,reject){
                        db.book.find({},function(err,data){
                            if(err){
                                console.log(err);
                                reject();
                            }
                            else{
                                if(data.length>0){
                                    resolve(data);
                                    }else{reject()}
                            }
                        })
                    });
                    var BookReturn = RequiredAllBooks.then(function(allbookdata){
                        return allbookdata
                    }).catch(()=>{
                        console.log("error in sending the all books data")
                    })
                    return BookReturn
                }
            },
            authors:{
                type:new GraphQLList(AuthorType),
                resolve(parent,args){
                    var RequiredAllAuthors = new Promise(function(resolve,reject){
                        db.author.find({},function(err,data){
                            if(err){
                                console.log(err);
                                reject();
                            }
                            else{
                                if(data.length>0){
                                resolve(data);
                                }else{reject()}
                            }
                        })
                    });
                    var AuthReturn = RequiredAllAuthors.then(function(allauthdata){
                        return allauthdata
                    }).catch(()=>{
                        console.log("error in sending the all authors data")
                    })
                    return AuthReturn
                }
            }
        }
});

const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        addauthor:{
            type:AuthorType,
            args:{
                name:{type:GraphQLString},
                age:{type:GraphQLInt},
            },
            resolve(parent,args){
                var auth={
                    name:args.name,
                    age:args.age
                }
                var promise = new Promise(function(resolve,reject){
                    db.author.insert(auth,function(err,data){
                            if(err){
                                console.log(err)
                                reject();
                            }
                            else{
                                resolve(data);
                            }
                        });
                    });
                    var dataNew = promise.then(function(returnedData){
                        return returnedData;
                    }).catch(()=>{
                        console.log("error occured");
                    })
                    return dataNew;
            }
        },
        addbook:{
            type:BookType,
            args:{
                name:{type:GraphQLString},
                genre:{type:GraphQLString},
                authorId:{type:GraphQLID}
            },
            resolve(parent,args){
                var book={
                    name:args.name,
                    genre:args.genre,
                    authorId:args.authorId
                }
                var promise = new Promise(function(resolve,reject){
                db.book.insert(book,function(err,data){
                        if(err){
                            console.log(err)
                            reject();
                        }
                        else{
                            resolve(data);
                        }
                    });
                });
                var dataNew = promise.then(function(returnedData){
                    return returnedData;
                }).catch(()=>{
                    console.log("error occured");
                })
                return dataNew;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})