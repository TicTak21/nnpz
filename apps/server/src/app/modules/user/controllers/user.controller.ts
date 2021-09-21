import {
  Body,
  CacheInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { PaginationArgsDto } from '../../../shared/validation/dto';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto } from '../validation/dto';
import { PaginatedUsersRo } from '../validation/ro';

@Controller('users')
@UseInterceptors(CacheInterceptor)
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  getAll(@Query() pagination: PaginationArgsDto): Observable<PaginatedUsersRo> {
    return this.userService.getAll(pagination);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single user by `id`' })
  get(@Param('id') id: string): Observable<UserEntity> {
    return this.userService.get(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create single user' })
  create(@Body() createUserDto: CreateUserDto): Observable<UserEntity> {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Delete single user by `id`' })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Observable<UserEntity> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Update single user by `id`' })
  delete(@Param('id') id: string): Observable<UserEntity> {
    return this.userService.delete(id);
  }
}
