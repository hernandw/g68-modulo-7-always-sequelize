import { DataTypes } from 'sequelize'
import db from '../config/db.js'

const Users = db.define('users', {
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    rut: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true
        
    },
    course: {
        type: DataTypes.STRING(60),
        allowNull: false
        
    },
    level:{
        type: DataTypes.STRING(60),
        allowNull: false
        
    }
})

export default Users


