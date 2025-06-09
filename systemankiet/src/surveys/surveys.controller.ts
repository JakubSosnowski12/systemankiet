import {
  Controller, Get, Post, Body, Param, ParseIntPipe, Patch, Delete,
} from '@nestjs/common';
import {
  ApiTags, ApiOperation, ApiResponse,
} from '@nestjs/swagger';
import { SurveysService } from './surveys.service';
import { CreateSurveyDto } from './dto/create-survey.dto';

@ApiTags('Surveys')
@Controller('surveys')
export class SurveysController {
  constructor(private readonly svc: SurveysService) {}

  @Post()
  @ApiOperation({ summary: 'Stwórz nową ankietę' })
  @ApiResponse({ status: 201, description: 'Ankieta została utworzona.' })
  create(@Body() dto: CreateSurveyDto) {
    return this.svc.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Pobierz wszystkie ankiety' })
  @ApiResponse({ status: 200, description: 'Lista ankiet.' })
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pobierz ankietę po ID' })
  @ApiResponse({ status: 200, description: 'Szczegóły ankiety.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.svc.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Aktualizuj ankietę' })
  @ApiResponse({ status: 200, description: 'Ankieta zaktualizowana.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateSurveyDto,
  ) {
    return this.svc.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Usuń ankietę' })
  @ApiResponse({ status: 200, description: 'Ankieta usunięta.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.svc.remove(id);
  }
}
