const{Client} = require('pg')
 const client = new Client({
    user: "rayhan",
    password: "redventura",
    host: "localhost",
    port: 5432,
    database: "databasedb"
})

client.connect()
.then(()=>console.log("connected successfuly"))
.then(()=>client.query("select * from users"))
.then(()=>(result = console.table(results.rows)))
.catch(err=>console.error("error connecting"))
.finally(()=>client.end())

