const app = require('./src/config/dependencies')
const connection = require('./src/app/infra/connection')
const Tables = require('./src/app/infra/tables')

connection.connect((err, client, done) => {

    if (err) { console.log(err) }

    else { 
        console.log('Database connected on port 3306')
        Tables.init(connection)
        app.listen(3000, () => {
            console.log("Server running on port 3000")
        })
     }
})
