import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

@InputType()
export class RegisterInput {
    @Field(() => String)
    @IsString({ message: "Имя должно быть строкой" })
    @IsNotEmpty({ message: "Имя должно быть заполненным" })
    @MaxLength(50, { message: "Имя не должно быть длиннее 50 символов" })
    name: string;

    @Field(() => String)
    @IsString({ message: "Почта должно быть строкой" })
    @IsNotEmpty({ message: "Почта должно быть заполненным" })
    @IsEmail({}, { message: "Некорректный формат почты" })
    email: string;

    @Field(() => String)
    @IsString({ message: "Пароль должно быть строкой" })
    @IsNotEmpty({ message: "Пароль должно быть заполненным" })
    @MinLength(6, { message: "Пароль должен содержать не менее 6 символов" })
    @MaxLength(128, { message: "Пароль не должен быть длиннее 128 символов" })
    password: string;
}