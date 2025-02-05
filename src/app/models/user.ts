import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../config/database";
import { eTable } from "../enum/table.enum";

export interface UserAttribute {
  UserID: number;
  UserName: string;
  Email: string;
  Password: string;
  CreatedAt: Date;
}

class ASTROLOGICAL_USER extends Model<UserAttribute> implements UserAttribute {
  public UserID: number;
  public UserName: string;
  public Email: string;
  public Password: string;
  public CreatedAt: Date;
}

ASTROLOGICAL_USER.init(
  {
    UserID: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    UserName: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    timestamps: false,
    tableName: eTable.ASTROLOGICAL_USER,
  }
);

export default ASTROLOGICAL_USER;
