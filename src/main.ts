import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

// routes the request to a particular method
@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'hello world';
  }
}

// When the app starts it will look at the array of controllers
// and create an instance of each controller in the array
@Module({
  controllers: [AppController],
})
class AppModule {}

// we need a function that will run at the start of the app
// this will create our AppModule
// calling this function bootstrap is common practice
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
