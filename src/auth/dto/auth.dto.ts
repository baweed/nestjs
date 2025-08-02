import { ApiProperty } from "@nestjs/swagger";

export class AuthResponse{
    @ApiProperty({
        description: 'JWT access token',
        example: 'eyASJDDWUFjfqqwfjqwfjqwjDAJSAXJFjej...'
    })
    accessToken:string;
}