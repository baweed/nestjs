import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser'
import { ConfigService } from '@nestjs/config';
import { CustomLogger } from './common/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    bufferLogs: true
  });

  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());

  app.use(cookieParser())

  app.useLogger(new CustomLogger())

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  })

  app.enableCors({
    origin: configService.getOrThrow<string>('ALLOWED_ORIGINS').split(','),
    credentials: true,
    methods: ['GET', 'HEAD', 'PUT', 'POST'],
    exposedHeaders: ['Set-Cookie', 'Content-Disposition'],
    allowedHeaders: ['X-Api-Key', 'Authorization'],
  })

  await app.listen(8080, '127.0.0.1')
}
bootstrap();
