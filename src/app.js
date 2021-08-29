import { Router } from 'express';
import routeProjects from './routes/projects.router';
import routeTasks from './routes/task.router';

const router = Router();

// This is the project controller.
router.use('/api/projects', routeProjects); 

// This is the task controller.
router.use('/api/tasks', routeTasks); 

export default router;