import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl, isURL, IsUUID, Length, Matches, MaxLength, MinLength } from "class-validator";
import { StartsWith } from "../decorators/start-with.decorator";


export enum TaskTag {
    WORK = 'work',
    STUDY = 'study',
    HOME = 'home'
}
export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @StartsWith("Task:")
    @Length(8, 30)
    title: string

    @IsString({ message: 'Описание должно быть строкой' })
    @IsOptional()
    description: string;

    @IsInt({ message: "Приоритет должен быть целым числом" })
    @IsPositive({ message: "Приоритет должен быть положительным" })
    @IsOptional()
    priority: number;

    @IsArray({ message: "Теги должны быть массивом" })
    @IsEnum(TaskTag, { each: true, message: "Недопустимое значение тега" })
    @IsOptional()
    tags: TaskTag[]



    // @IsString()
    // @MinLength(8)
    // @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    // password: string;

    // @IsUrl({
    //     protocols: ['http'],
    //     require_valid_protocol: true
    // },
    //     { message: "Некорректный формат URL" })
    // websiteURL: string

    // @IsUUID('4',{message: "Неверный UUID"})
    // userId:string;
}