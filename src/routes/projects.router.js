import { Router } from 'express';
const router = Router();
import projects from '../controllers/projects.controller';

router.get('/', projects.getProjects);
router.get('/:id', projects.getProjectById);
router.post('/', projects.createProject);
router.put('/:id', projects.updateProject);
router.delete('/:id', projects.deleteProject);

export default router;

/**
 * @swagger
 * ...
 */