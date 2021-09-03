import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class UserService {
    
    constructor(private prisma : PrismaService){}

    async getAll() : Promise<User[]>{
        return this.prisma.user.findMany();
    }
    
    async getOne(id : Prisma.UserWhereUniqueInput) : Promise<User>{
        return this.prisma.user.findUnique({
            where : id
        })
    }

    async createOne(data : Prisma.UserCreateInput) : Promise<User>{
        return this.prisma.user.create({
            data
        })
    }

    async deleteOne(id : Prisma.UserWhereUniqueInput)  :Promise<User>{
        return this.prisma.user.delete({
            where : id
        })
    }
    
    async updateOne(params:{
        where :Prisma.UserWhereUniqueInput, 
        data : Prisma.UserUpdateInput
    }):Promise<User>{
        const {where, data} = params;
        return this.prisma.user.update({
            where,
            data
        })
    }
}
