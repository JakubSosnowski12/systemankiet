import { ApiProperty } from '@nestjs/swagger';

export class CreateSurveyDto {
  @ApiProperty({ example: 'Ulubione narzędzie do kodowania' })
  title: string;

  @ApiProperty({ example: 'Krótki opis ankiety', required: false })
  description?: string;
}
