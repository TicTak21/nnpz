import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  index() {
    return {
      routes: [
        { path: '/', label: 'Index', description: 'Navigation index' },
        { path: '/graphql', label: 'GraphQL', description: 'GraphQL Playground' },
        { path: '/swagger', label: 'Swagger UI', description: 'REST API Swagger UI' },
      ],
    };
  }
}
