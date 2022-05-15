import { DataTypes } from 'sequelize';
import { sequelize } from '../db';


export const User_Match = sequelize.define('User_Match', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  matchId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  team: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  
},{
  timestamps: false
});

export const createtableUser_Match = async () => {
    await User_Match.sync({ force: true })
}