const server = require('./app')
const PORT = 3002;
const { conn } = require('./DB_connection');



server.listen(PORT, () => {
    conn.sync({force:true})
    console.log('Server raised un port: ' + PORT)
})