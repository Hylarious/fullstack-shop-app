import { IsNotEmpty,  IsString, IsNumber } from "class-validator"

export class CreateOrderAdditionalDTO {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsString()
    description: string;
}