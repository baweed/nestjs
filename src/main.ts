import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { logger } from './common/middlewares/logger.middleware';
import { ResponseInterseptor } from './common/interseptors/response.interseptor';
import { AllExceptionsFilter } from './common/filters/all.exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  app.useGlobalInterceptors(new ResponseInterseptor())

  app.useGlobalFilters(new AllExceptionsFilter())

  app.use(logger)

  const config = new DocumentBuilder()
    .setTitle("NestJS Course Api")
    .setDescription("API documentation for nest course")
    .setVersion('1.0.0')
    .setContact("Barba team", "https://barba.ru", "barbashev@mail.ru")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document,{
    jsonDocumentUrl: '/swagger.json',
    yamlDocumentUrl: '/swagger.yaml',
    customSiteTitle: 'NestJS API'
  })

  await app.listen(8080, '127.0.0.1')
}
bootstrap();
