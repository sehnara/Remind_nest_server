import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<User[]>;
    getOne(id: Prisma.UserWhereUniqueInput): Promise<User>;
    createOne(data: Prisma.UserCreateInput): Promise<User>;
    deleteOne(id: Prisma.UserWhereUniqueInput): Promise<User>;
    updateOne(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User>;
}
