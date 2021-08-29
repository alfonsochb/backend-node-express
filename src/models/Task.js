import Sequalize from 'sequelize';
import { sequalize } from '../database/database';

const Task = sequalize.define('task', {
    id: {
        type: Sequalize.INTEGER,
        primaryKey: true
    },
    projectid: {
        type: Sequalize.INTEGER,
    },
    name: {
        type: Sequalize.TEXT
    },
    done: {
        type: Sequalize.DATE
    }
},
{
    timestamps: false
});

export default Task;