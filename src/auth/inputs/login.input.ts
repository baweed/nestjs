import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class LoginInput {

    @Field(() => String)
    @IsString({ message: "Email должен быть строкой" })
    @IsNotEmpty({ message: "Email должен быть заполненным" })
    @IsEmail({}, { message: "Некорректный формат Email" })
    email: string;

    @Field(() => String)
    @IsString({ message: "Пароль должен быть строкой" })
    @IsNotEmpty({ message: "Пароль должен быть заполненным" })
    password: string;
}