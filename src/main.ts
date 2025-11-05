import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true,
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     disableErrorMessages: false,
  //     transformOptions: {
  //       enableImplicitConversion: true,
  //     },
  //   }),
  // );

  app.enableCors({ origin: '*' });

  await app.listen(3000);
}
bootstrap();
