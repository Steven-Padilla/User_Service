import { Model, DataTypes } from 'sequelize'
import { postgresConnection } from '../../infraestructure/db/postgresqlDB';
export class User extends Model {
    declare id: number;
    declare name: string;
    declare id_name: string;
    declare email: string;
    declare premium: boolean;
    declare password: string;
};

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    id_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    premium: DataTypes.BOOLEAN,
}, { sequelize: postgresConnection, modelName: 'user' });

