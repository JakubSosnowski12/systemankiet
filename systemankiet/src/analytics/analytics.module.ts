import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { QuestionsModule } from '../questions/questions.module';
import { ResponsesModule } from '../responses/responses.module';

@Module({
  imports: [ QuestionsModule, ResponsesModule ],
  providers: [ AnalyticsService ],
  controllers: [ AnalyticsController ],
})
export class AnalyticsModule {}
