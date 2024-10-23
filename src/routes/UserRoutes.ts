import express from 'express';
import { userCreate, userDelete, userGet, userUpdate } from '../controller/userController'; // Make sure this path is correct

const router = express.Router();

router.post('/createUser', userCreate);
router.get("/getUser", userGet)
router.put("/updateUser/:id", userUpdate);
router.delete("/deleteUser/:id", userDelete)

export default router;
