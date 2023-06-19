import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // невалидный запрос даже не дойдет до декоратора
      forbidNonWhitelisted: true, // запрет  любых запросов, которые не отвечают нашим критериям
      transform: true, // преобразовывает число в number, строку в string
    }),
  );
  await app.listen(3000);
}
bootstrap();
