import { IsBoolean, IsNotEmpty, IsString, Length } from "class-validator";

export class UpdateTaskDto {
    @IsString({ message: 'Название задачи должно быть строкой' })
    @IsNotEmpty({ message: 'Название задачи не может быть пустой' })
    @Length(8, 30, { message: 'Длина названия должна быть от 8 до 30 символов' })

    title: string;
    
    @IsBoolean({ message: "Статус должен быть булевым выражением" })
    isCompleted: boolean;
}