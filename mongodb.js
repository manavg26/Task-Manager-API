const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
const databaseURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(databaseURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log("Unable to connect to database!")
    }
    const db=client.db(databaseName)
    db.collection('users').insertOne({
        name:"Raj",
        age:45
    },(error,result)=>{
        if(error){
            return console.log("Unable to insert record!")
        }
        console.log(result.acknowledged)
    })
})

