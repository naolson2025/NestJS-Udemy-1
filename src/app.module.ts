import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// When the app starts it will look at the array of controllers
// and create an instance of each controller in the array
@Module({
  controllers: [AppController],
})
export class AppModule {}
