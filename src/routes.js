import express from 'express';
import AccountController from 'controllers/AccountController';

const router = express.Router();


router.get('/', AccountController.list);
router.get('/create', AccountController.create);

export default router;
