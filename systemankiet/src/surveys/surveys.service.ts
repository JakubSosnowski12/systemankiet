import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';

@Injectable()
export class SurveysService {
  private surveys: Array<{ id: number } & CreateSurveyDto> = [];

  create(dto: CreateSurveyDto) {
    const survey = { id: Date.now(), ...dto };
    this.surveys.push(survey);
    return survey;
  }

  findAll() {
    return this.surveys;
  }

  findOne(id: number) {
    const s = this.surveys.find(x => x.id === id);
    if (!s) throw new NotFoundException(`Ankieta ${id} nie istnieje`);
    return s;
  }

  update(id: number, dto: CreateSurveyDto) {
    const idx = this.surveys.findIndex(x => x.id === id);
    if (idx < 0) throw new NotFoundException(`Ankieta ${id} nie istnieje`);
    this.surveys[idx] = { id, ...dto };
    return this.surveys[idx];
  }

  remove(id: number) {
    const idx = this.surveys.findIndex(x => x.id === id);
    if (idx < 0) throw new NotFoundException(`Ankieta ${id} nie istnieje`);
    const [deleted] = this.surveys.splice(idx, 1);
    return deleted;
  }
}
