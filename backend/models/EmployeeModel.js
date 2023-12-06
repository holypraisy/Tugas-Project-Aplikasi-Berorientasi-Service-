import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Employee = db.define('employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Tambahkan ini untuk AUTO_INCREMENT
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Perubahan di sini
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Perubahan di sini
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  freezeTableName: true // Hapus opsi ini jika tidak diperlukan
});

// Hapus penambahan kode async/await untuk sync
(async () => {
  await db.sync();
})();

export default Employee;
