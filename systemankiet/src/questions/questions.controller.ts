import {
  Controller,
  Post,
  Param,
  Body,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@ApiTags('Questions')
@Controller('surveys/:surveyId/questions')
export class QuestionsController {
  constructor(private readonly svc: QuestionsService) {}

  @Post()
  @ApiOperation({ summary: 'Add a question to a survey' })
  @ApiResponse({ status: 201, description: 'Question created.' })
  create(
    @Param('surveyId', ParseIntPipe) surveyId: number,
    @Body() dto: CreateQuestionDto,
  ) {
    return this.svc.create(surveyId, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a question' })
  @ApiResponse({ status: 200, description: 'Question removed.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.svc.remove(id);
  }
}