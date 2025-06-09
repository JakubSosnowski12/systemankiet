import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionsService {
  private questions: Array<{ id: number; surveyId: number } & CreateQuestionDto> = [];

  create(surveyId: number, dto: CreateQuestionDto) {
    const question = { id: Date.now(), surveyId, ...dto };
    this.questions.push(question);
    return question;
  }

  findBySurvey(surveyId: number) {
    return this.questions.filter(q => q.surveyId === surveyId);
  }

  remove(id: number) {
    const idx = this.questions.findIndex(q => q.id === id);
    if (idx < 0) throw new NotFoundException(`Question ${id} not found`);
    return this.questions.splice(idx, 1)[0];
  }
}