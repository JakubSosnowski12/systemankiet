import { Module } from '@nestjs/common';
import { SurveysModule } from './surveys/surveys.module';
import { QuestionsModule } from './questions/questions.module';
import { ResponsesModule } from './responses/responses.module';
import { AnalyticsModule } from './analytics/analytics.module';  // ← dodaj

@Module({
  imports: [
    SurveysModule,
    QuestionsModule,
    ResponsesModule,
    AnalyticsModule,  // ← tutaj
  ],
})
export class AppModule {}
