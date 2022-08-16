import { Controller, Get } from '@nestjs/common';

// routes the request to a particular method
// If the @Controller() is not provided any string then it will route based on the base url
// A string with a route can be provided to @Controller('/app') and this route will
// apply to all methods inside the controller
@Controller('/app')
export class AppController {
  @Get('/test')
  getRootRoute() {
    return 'hello world';
  }

  @Get('/bye')
  getBye() {
    return 'bye';
  }
}
