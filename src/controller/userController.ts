import e, { json, Request, Response } from "express";
import { createUser, deleteUser, getUser, updateUser } from "../model/UserModel";
import { error } from "winston";

const userCreate = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { username, email } = req.body;
        if (!username || !email) {
            return res.status(400).json({ msg: "username & email are required" });
        }

        const newUser = await createUser(username, email);
        return res
            .status(201)
            .json({ message: "User created successfully.", user: newUser });
    } catch (error) {
        console.log("error", error);

        return res.status(500).json({
            message: "Could not create user",
            error: error,
        });
    }
};

const userGet = async (req: Request, res: Response) => {
    try {
        const user = await getUser();
        return res.status(200).json({ message: "Get users successfully ", user });
    } catch (error) {
        return res.status(500).json({
            message: "Not get all the user",
            error: error,
        });
    }
};

const userUpdate = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { username, email } = req.body;

        const user = await updateUser(id, username, email);
        return res.status(201).json({ message: "user updated successfully", user })
    } catch (error) {
        return res
            .status(500)
            .json({ mssage: "Could not update the user", error: error });
    }
};

const userDelete = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await deleteUser(id);

        console.log("USER----->", user);

        if (!user) {
            console.log("COMMMM");

            return res.status(400).json({ message: "user not found" })
        }
        return res.status(200).json({ message: "user Delete successfully", user })
    } catch (error) {
        return res
            .status(500)
            .json({ mssage: error, error: error });

    }
}

export { userCreate, userGet, userUpdate, userDelete };
