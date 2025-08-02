import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class RegisterRequest {
    @ApiProperty({
        description: 'Отображаемое имя',
        example: 'Donald Duck',
        maxLength: 50
    })
    @IsString({ message: "Имя должно быть строкой" })
    @IsNotEmpty({ message: "Имя должно быть заполненным" })
    @MaxLength(50, { message: "Имя не должно быть длиннее 50 символов" })
    name: string;

    @ApiProperty({
        description: 'Почтовый адрес',
        example: 'donaldduck@gmail.com'
    })
    @IsString({ message: "Почта должно быть строкой" })
    @IsNotEmpty({ message: "Почта должно быть заполненным" })
    @IsEmail({}, { message: "Некорректный формат почты" })
    email: string;

    @ApiProperty({
        description: 'Пароль',
        example: 'DonaldDuck',
        minLength:6,
        maxLength: 128
    })
    @IsString({ message: "Пароль должно быть строкой" })
    @IsNotEmpty({ message: "Пароль должно быть заполненным" })
    @MinLength(6, { message: "Пароль должен содержать не менее 6 символов" })
    @MaxLength(128, { message: "Пароль не должен быть длиннее 128 символов" })
    password: string;
}