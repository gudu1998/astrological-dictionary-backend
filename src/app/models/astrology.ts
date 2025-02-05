import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../config/database";
import { eTable } from "../enum/table.enum";

export interface AstrologicalDictionaryAttribute {
  TermID: number;
  TermName: string;
  Description: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: Date;
  IsActive: number;
}

class ASTROLOGICAL_DICTIONARY
  extends Model<AstrologicalDictionaryAttribute>
  implements AstrologicalDictionaryAttribute
{
  public TermID: number;
  public TermName: string;
  public Description: string;
  public CreatedAt: Date;
  public UpdatedAt: Date;
  public DeletedAt: Date;
  public IsActive: number;
}

ASTROLOGICAL_DICTIONARY.init(
  {
    TermID: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    TermName: {
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
    tableName: eTable.ASTROLOGICAL_DICTIONARY,
  }
);

export default ASTROLOGICAL_DICTIONARY;
