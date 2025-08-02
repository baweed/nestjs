import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginRequest {

    @ApiProperty({
        description: 'Почтовый адрес',
        example: 'donaldduck@gmail.com'
    })
    @IsString({ message: "Email должен быть строкой" })
    @IsNotEmpty({ message: "Email должен быть заполненным" })
    @IsEmail({}, { message: "Некорректный формат Email" })
    email: string;
    
    @ApiProperty({
        description: 'Пароль',
        example: 'DonaldDuck',
        minLength: 6,
        maxLength: 128
    })
    @IsString({ message: "Пароль должен быть строкой" })
    @IsNotEmpty({ message: "Пароль должен быть заполненным" })
    password: string;
}