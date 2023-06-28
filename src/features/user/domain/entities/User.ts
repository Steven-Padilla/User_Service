import { Model, DataTypes } from 'sequelize'
import { postgresConnection } from '../../infraestructure/db/postgresqlDB';
export class User extends Model {
    declare name: string;
    declare id_name: string;
    declare email: string;
    declare premium: boolean;
    declare password: string;
};

User.init({
    id_name: {
        type:DataTypes.STRING,
        primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    premium: DataTypes.BOOLEAN,
}, { sequelize: postgresConnection, modelName: 'user' });

