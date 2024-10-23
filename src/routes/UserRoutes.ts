import express from 'express';
import { userCreate } from '../controller/userController'; // Make sure this path is correct

const router = express.Router();

router.post('/user', userCreate);

export default router;
