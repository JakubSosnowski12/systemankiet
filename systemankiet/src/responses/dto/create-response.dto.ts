import { ApiProperty } from '@nestjs/swagger';

export class AnswerItemDto {
  @ApiProperty({ example: 1, description: 'ID pytania' })
  questionId: number;

  @ApiProperty({ example: 'Tak', description: 'Wybrana odpowiedź (tekstowo)' })
  answer: string;
}

export class CreateResponseDto {
  @ApiProperty({
    type: [AnswerItemDto],
    description: 'Lista odpowiedzi dla poszczególnych pytań',
  })
  answers: AnswerItemDto[];
}
