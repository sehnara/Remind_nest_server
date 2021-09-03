import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService : UserService){}

    @Get()
    async getAll():Promise<User[]>{
        return this.userService.getAll();        
    }

    @Get(":id")
    async getOne(@Param("id") id:number) :Promise<User>{
        return this.userService.getOne({id : Number(id)})
    }

    @Post("create")
    async createOne(@Body() userData : {
        name : string;
        nickname : string;
        email : string;
        tel : string;
        live : string;
        job : string;
        hobby : string;
    }):Promise<User>{
        const {name, nickname, email, tel, live, job, hobby} = userData;
        return this.userService.createOne({
            name, nickname, email, tel, live, job, hobby
        })
    }

    @Delete(":id")
    async deleteOne(@Param("id") id:number) : Promise<User>{
        return this.userService.deleteOne({
            id : Number(id)
        })
    }

    @Put(":id")
    async updateOne(
        @Param("id") id:number,
        @Body() userData : {
            name : string;
            nickname : string;
            email : string;
            tel : string;
            live : string;
            job : string;
            hobby : string;
        }):Promise<User>{
            const {name, nickname, email, tel, live, job, hobby} = userData;
            return this.userService.updateOne({
                where : {id : Number(id)},
                data : {name, nickname, email, tel, live, job, hobby}
            })
        }

}
