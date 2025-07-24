import { Body, Controller, Delete, Get, Head, Param, Post, Put, Query, Req } from '@nestjs/common';
import type { Request } from 'express';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  findByID(@Param('id') id: string) {
    return this.movieService.findById(id);
  }

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

