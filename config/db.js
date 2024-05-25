import Sequelize from 'sequelize'
import 'dotenv/config'
const { DB_USER, DB_HOST, DB_PASSWORD, DB_DATABASE, DB_DIALECT } = process.env

const db = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
})
    
export default db