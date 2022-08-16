import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// we need a function that will run at the start of the app
// this will create our AppModule
// calling this function bootstrap is common practice
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
