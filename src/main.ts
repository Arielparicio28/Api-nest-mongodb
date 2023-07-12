import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({whitelist:true}));

  const config = new DocumentBuilder()
  .setTitle('Backend Api with MongoDb')
  .setDescription('Backend Api ')
  .setVersion('1.0')
  .addTag('user')
  .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
  await app.listen(3000);
}
bootstrap();
