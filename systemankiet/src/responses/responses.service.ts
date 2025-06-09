// src/responses/responses.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResponseDto, AnswerItemDto } from './dto/create-response.dto';

export interface StoredResponse {
  id: number;
  surveyId: number;
  answers: AnswerItemDto[];
}

@Injectable()
export class ResponsesService {
  private responses: StoredResponse[] = [];

  create(surveyId: number, dto: CreateResponseDto): StoredResponse {
    const resp: StoredResponse = {
      id: Date.now(),
      surveyId,
      answers: dto.answers,
    };
    this.responses.push(resp);
    return resp;
  }

  findAll(surveyId: number): StoredResponse[] {
    return this.responses.filter(r => r.surveyId === surveyId);
  }

  findOne(surveyId: number, id: number): StoredResponse {
    const resp = this.responses.find(r => r.surveyId === surveyId && r.id === id);
    if (!resp) throw new NotFoundException(`Odpowiedź ${id} nie istnieje`);
    return resp;
  }
}
