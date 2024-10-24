// src/model/UserModel.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (username: string, email: string) => {
    const user = await prisma.user.create({
        // Make sure the model name is lowercase 'user'
        data: {
            username,
            email,
        },
    });
    return user;
};

export const getUser = async () => {
    const user = await prisma.user.findMany({});

    console.log("user", user);

    return user;
};

const getUserById = async (id: string) => {
    const userId = parseInt(id);


    const user = await prisma.user.findFirst({
        where: {
            id: userId,
        },
    });




    return user;
};
export const updateUser = async (
    id: string,
    username: string,
    email: string
) => {
    console.log("usser id get", typeof id);

    const user = await getUserById(id);

    if (!user) {
        return user;
    }
    const userData = await prisma.user.update({
        where: {
            id: parseInt(id),
        },
        data: {
            username,
            email,
        },
    });

    return user;
};

export const deleteUser = async (id: string) => {
    const user = await getUserById(id);

    console.log("delete user", user);

    if (!user) {
        return user;
    }

    const userDelete = await prisma.user.delete({
        where: {
            id: parseInt(id),
        },
    });

    return userDelete;
};
