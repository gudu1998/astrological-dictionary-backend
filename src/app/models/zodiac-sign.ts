import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../config/database";
import { eTable } from "../enum/table.enum";

export interface ZodiacSignAttribute {
  ZodiacSignID: number;
  ZodiacSign: string;
  Description: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: Date;
  IsActive: number;
}

class ZODIAC_SIGN
  extends Model<ZodiacSignAttribute>
  implements ZodiacSignAttribute
{
  public ZodiacSignID: number;
  public ZodiacSign: string;
  public Description: string;
  public CreatedAt: Date;
  public UpdatedAt: Date;
  public DeletedAt: Date;
  public IsActive: number;
}

ZODIAC_SIGN.init(
  {
    ZodiacSignID: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    ZodiacSign: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    IsActive: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    DeletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeConnection,
    timestamps: false,
    tableName: eTable.ZODIAC_SIGN,
  }
);

export default ZODIAC_SIGN;
