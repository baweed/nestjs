import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateMovieDto {
    @ApiProperty({
        description: 'Название фильма',
        example: 'Turtle',
        type: String
    })

    title: string;

    @ApiProperty({
        description: 'Год выхода',
        example: 1999,
        type: Number
    })
    releaseYear: number;

    @ApiPropertyOptional({
        description: 'Ссылка на постер фильма',
        example: 'https://storage.example.com/posters/213',
        type: String
    })
    poster?: string;

    @ApiProperty({
        description: 'ID актёров',
        example: ['123456', '7543452'],
        type: [String]
    })
    actorIds: string[]
}