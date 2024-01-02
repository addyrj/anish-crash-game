import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  Query,
} from '@nestjs/common';
import { BetService } from './bet.service';
import { CreateBetDto } from './dto/create-bet.dto';
import { UpdateBetDto } from './dto/update-bet.dto';
import { HttpExceptionFilter } from 'exception/httpExceptionFilter';

@Controller('bet')
@UseFilters(HttpExceptionFilter)
export class BetController {
  constructor(private readonly betService: BetService) {}

  @Post('/create')
  create(@Body() createBetDto: CreateBetDto) {
    return this.betService.create(createBetDto);
  }

  @Get()
  findAll() {
    return this.betService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.betService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBetDto: UpdateBetDto) {
    // console.log(id)
    return this.betService.update(id, updateBetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.betService.remove(+id);
  }
}
