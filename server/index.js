const server = require('./src/app')
const PORT = 3002;
const { conn } = require('./src/DB_connection');



server.listen(PORT, () => {
    conn.sync({force:false})
    console.log('Server raised un port: ' + PORT)
})