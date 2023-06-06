import { Sequelize } from "sequelize";
import db from "../config/db.js";

const{DataTypes} = Sequelize;

const User = db.define('users',{
    name: DataTypes.STRING,
    tgl_lhir: DataTypes.STRING,
    tmpat_lhir: DataTypes.STRING, 
    kelas: DataTypes.STRING,
    alamat: DataTypes.STRING,
    no_hp: DataTypes.INTEGER,
    name_ortu: DataTypes.STRING,
    no_hportu: DataTypes.INTEGER,
},{
    freezeTableName:true
});

export default User;

(async() => {
    await db.sync();
})();