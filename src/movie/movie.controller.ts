import { Body, Controller, Delete, Get, Head, HttpStatus, Param, Post, Put, Query, Req } from '@nestjs/common';
import type { Request } from 'express';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';
import { ApiBody, ApiHeader, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import path from 'path';
import { CreateMovieDto } from './dto/create-movie.dto';


@ApiTags('Movie')
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @ApiOperation({
    summary: 'Получить список фильмов',
    description: 'Возвращает список со всеми фильмами'
  })
  @ApiOkResponse({
    description: 'Фильмы найдены',
    example:{
      status: 200,
      message: 'Успешно найдены',
      timestamp: '2025-02-08',
      path: '/movies'
    }
  })

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'ID фильма'
  })
  @ApiQuery({
    name: 'year',
    type: 'number',
    description: 'Фильтр по году'
  })
  @Get(':id')
  findByID(@Param('id') id: string) {
    return this.movieService.findById(id);
  }

  @ApiOperation({
    summary: 'Создать фильм'
  })
  @ApiBody({
    schema:{
      type: 'object',
      properties:{
        title: {type:'string', example: 'Turtle'}
      }
    }
  })
  @Post()
  create(@Body() dto: MovieDto) {
    return this.movieService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: MovieDto) {
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.delete(id)
  }
}

