import { ApiProperty } from '@nestjs/swagger';
import { QuestionStatDto } from './question-stat.dto';

export class AnalyticsResponseDto {
  @ApiProperty({ example: 17, description: 'Łączna liczba zebranych odpowiedzi' })
  totalResponses: number;

  @ApiProperty({ type: [QuestionStatDto], description: 'Statystyki dla każdego pytania' })
  questionStats: QuestionStatDto[];
}
