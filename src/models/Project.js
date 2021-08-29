import Sequalize from 'sequelize';
import { sequalize } from '../database/database';
import Task from './Task';

const Project = sequalize.define('projects', {
    id: {
        type: Sequalize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequalize.TEXT
    },
    priority: {
        type: Sequalize.INTEGER
    },
    deliverydate: {
        type: Sequalize.DATE
    }
},
{
    timestamps: false
});

Project.hasMany(Task, { foreingKey: 'projectid', sourceKey: 'id'});// El proyecto tiene muchas tareas.
Task.belongsTo(Project, { foreingKey: 'projectid', sourceKey: 'id'});// Las tareas pertenecen a un proyecto.

export default Project;