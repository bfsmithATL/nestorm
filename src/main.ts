import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap():Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  app.enableCors({
    methods: 'GET,PUT,POST,DELETE,OPTIONS'
  });

  const options = new DocumentBuilder()
    .setTitle('Nest TypeORM Test API')
    .setDescription('This is a test harness for Nest and TypeORM')
    .setVersion(`nest-${process.env.NODE_APP_VERSION}`)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3001;

  await app.listen(port);
}
void bootstrap();
