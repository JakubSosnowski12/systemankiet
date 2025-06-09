import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty({ example: 'What is your favorite framework?' })
  text: string;

  @ApiProperty({
    example: ['NestJS', 'Express', 'Fastify'],
    description: 'Answer options for closed questions',
    required: false,
    type: [String],
  })
  options?: string[];
}