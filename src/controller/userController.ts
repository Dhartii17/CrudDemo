import { Request, Response } from "express";
import { createUser } from "../model/UserModel";

const userCreate = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { username, email } = req.body;
        if (!username || !email) {
            return res.status(400).json({ msg: "username & email are required" });
        }

        const newUser = await createUser(username, email);
        return res.status(201).json({ message: "User created successfully.", user: newUser });
    } catch (error) {
        console.log("error", error);

        return res.status(500).json({
            message: "Could not create user",
            error: error,
        });
    }
};






export { userCreate };
