import Sequalize from 'sequelize';

export const sequalize = new Sequalize(
    'postgres',
    'postgres',
    'password54321',
    {
        hots: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        //loggin: false // Para no ver mensajes por consola.
    }
)