import { Router } from 'express';
const router = Router();


router.get("/", function (req, res) {
    es.send("Hello World!");
});

export default router;

/**
 * @swagger
 * ...
 */