import { ApiProperty } from '@nestjs/swagger';

export class QuestionStatDto {
  @ApiProperty({ example: 123, description: 'ID pytania' })
  questionId: number;

  @ApiProperty({ example: 'Jakie jest Twoje ulubione IDE?', description: 'Treść pytania' })
  text: string;

  @ApiProperty({
    example: { VSCode: 10, IntelliJ: 5, Vim: 2 },
    description: 'Mapa odpowiedzi → liczba głosów',
    type: Object,
  })
  answerCounts: Record<string, number>;
}
