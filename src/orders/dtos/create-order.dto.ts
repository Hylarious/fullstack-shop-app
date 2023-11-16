import { IsNotEmpty, IsEmail, IsString } from "class-validator"

export class CreateOrderDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string


    @IsNotEmpty()
    @IsString()
    address: string

}