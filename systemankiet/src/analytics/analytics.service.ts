import { Injectable } from '@nestjs/common';
import { QuestionsService } from '../questions/questions.service';
import { ResponsesService } from '../responses/responses.service';
import { AnalyticsResponseDto } from './dto/analytics-response.dto';
import { QuestionStatDto } from './dto/question-stat.dto';

@Injectable()
export class AnalyticsService {
  constructor(
    private readonly questionsSvc: QuestionsService,
    private readonly responsesSvc: ResponsesService,
  ) {}

  getSurveyStats(surveyId: number): AnalyticsResponseDto {
    const questions = this.questionsSvc.findBySurvey(surveyId);
    const responses = this.responsesSvc.findAll(surveyId);

    const questionStats: QuestionStatDto[] = questions.map(q => {
      const counts: Record<string, number> = {};
      for (const r of responses) {
        const item = r.answers.find(a => a.questionId === q.id);
        if (item) {
          counts[item.answer] = (counts[item.answer] || 0) + 1;
        }
      }
      return {
        questionId: q.id,
        text: q.text,
        answerCounts: counts,
      };
    });

    return {
      totalResponses: responses.length,
      questionStats,
    };
  }
}
