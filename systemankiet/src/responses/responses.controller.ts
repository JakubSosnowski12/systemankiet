import {
  Controller, Post, Get, Param, Body, ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags, ApiOperation, ApiResponse,
} from '@nestjs/swagger';
import { ResponsesService } from './responses.service';
import { CreateResponseDto } from './dto/create-response.dto';

@ApiTags('Responses')
@Controller('surveys/:surveyId/responses')
export class ResponsesController {
  constructor(private readonly svc: ResponsesService) {}

  @Post()
  @ApiOperation({ summary: 'Wyślij odpowiedzi na ankietę' })
  @ApiResponse({ status: 201, description: 'Odpowiedź zapisana.' })
  create(
    @Param('surveyId', ParseIntPipe) surveyId: number,
    @Body() dto: CreateResponseDto,
  ) {
    return this.svc.create(surveyId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Pobierz wszystkie odpowiedzi dla ankiety' })
  @ApiResponse({ status: 200, description: 'Lista odpowiedzi.' })
  findAll(@Param('surveyId', ParseIntPipe) surveyId: number) {
    return this.svc.findAll(surveyId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pobierz pojedynczą odpowiedź' })
  @ApiResponse({ status: 200, description: 'Dane odpowiedzi.' })
  findOne(
    @Param('surveyId', ParseIntPipe) surveyId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.svc.findOne(surveyId, id);
  }
}
