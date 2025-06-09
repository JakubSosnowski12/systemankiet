import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';
import { AnalyticsResponseDto } from './dto/analytics-response.dto';

@ApiTags('Analytics')
@Controller('surveys/:surveyId/analytics')
export class AnalyticsController {
  constructor(private readonly analyticsSvc: AnalyticsService) {}

  @Get()
  @ApiOperation({ summary: 'Pobierz statystyki dla ankiety' })
  @ApiResponse({ status: 200, type: AnalyticsResponseDto })
  getStats(@Param('surveyId', ParseIntPipe) surveyId: number) {
    return this.analyticsSvc.getSurveyStats(surveyId);
  }
}
