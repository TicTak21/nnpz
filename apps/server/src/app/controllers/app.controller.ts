import { Controller, Get, Render } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from '../modules/auth/authentication/decorators';

@Controller()
@ApiTags('Index')
export class AppController {
  @Get()
  @Public()
  @Render('index')
  @ApiOperation({ summary: 'Navigation index(ui)' })
  index() {
    return {
      routes: [
        { path: '/', label: 'Index', description: 'Navigation index' },
        {
          path: '/graphql',
          label: 'GraphQL',
          description: 'GraphQL Playground',
        },
        {
          path: '/swagger',
          label: 'Swagger UI',
          description: 'REST API Swagger UI',
        },
      ],
    };
  }
}
