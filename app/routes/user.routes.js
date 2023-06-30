import express from 'express';
import {
	getUsers,
	addUsers,
	// updateUsers,
	// deleteUsers,
} from '../controllers/users.controller.js';

const router = express.Router();
router.get('/', getUsers);
router.post('/', addUsers);
// router.put("/id/:id", updateUsers);
// router.delete("/id/:id", deleteUsers);

export default router;
