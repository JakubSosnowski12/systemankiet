import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Survey } from '../surveys/survey.entity';

@Entity()
export class Response {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  answers: Record<string, string>;

  @ManyToOne(() => Survey, (s) => s.responses)
  survey: Survey;
}
