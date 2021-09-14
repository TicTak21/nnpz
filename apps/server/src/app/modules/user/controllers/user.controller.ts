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
import { ApiTags } from '@nestjs/swagger';
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
  getAll(@Query() pagination: PaginationArgsDto): Observable<PaginatedUsersRo> {
    return this.userService.getAll(pagination);
  }

  @Get(':id')
  get(@Param('id') id: string): Observable<UserEntity> {
    return this.userService.get(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Observable<UserEntity> {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Observable<UserEntity> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<UserEntity> {
    return this.userService.delete(id);
  }
}
