import express from 'express';
import {
	findAll,
	createUser,
	findUserById,
	updateUserById,
	deleteUserById,
} from '../controllers/user.controller.js';

const router = express.Router();
router.get('/', findAll);
router.get('/id/:id', findUserById);
router.post('/', createUser);
router.put('/id/:id', updateUserById);
router.delete('/id/:id', deleteUserById);

export default router;
