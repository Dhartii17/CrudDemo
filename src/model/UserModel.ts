// src/model/UserModel.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (username: string, email: string) => {
    const user = await prisma.user.create({ // Make sure the model name is lowercase 'user'
        data: {
            username,
            email,
        },
    });
    return user;
};
