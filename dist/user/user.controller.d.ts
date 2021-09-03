import { User } from '@prisma/client';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAll(): Promise<User[]>;
    getOne(id: number): Promise<User>;
    createOne(userData: {
        name: string;
        nickname: string;
        email: string;
        tel: string;
        live: string;
        job: string;
        hobby: string;
    }): Promise<User>;
    deleteOne(id: number): Promise<User>;
    updateOne(id: number, userData: {
        name: string;
        nickname: string;
        email: string;
        tel: string;
        live: string;
        job: string;
        hobby: string;
    }): Promise<User>;
}
