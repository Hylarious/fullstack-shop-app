import { IsNotEmpty, IsEmail, IsString } from "class-validator"

export class CreateOrderDTO {
    @IsNotEmpty()
    @IsString()
    name : string

    @IsNotEmpty()
    @IsEmail()
    email: string


    @IsNotEmpty()
    @IsString()
    address: string

}