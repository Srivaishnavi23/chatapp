const Sequeilze = require("sequelize");
const sequelize = new Sequeilze("vaishuchatapp","root","Srivaishu@23",{
    host:"localhost",
    dialect:"mysql"
});

module.exports = sequelize;