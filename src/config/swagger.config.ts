import { DocumentBuilder } from "@nestjs/swagger";

export function getSwaggerConfig(){
    return new DocumentBuilder()
    .setTitle('Awesome API')
    .setDescription('A simple and powerful API with NEST JS')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build()
}