const { buildSchema } = require("graphql");

module.exports=buildSchema(`

    type userData{
        firstname:String!
        lastname:String!
        employee:String!
        email:String!
    }
    type RootQuery{
        userFields(email:String):userData
    }

    schema{
        query:RootQuery
    }

`);