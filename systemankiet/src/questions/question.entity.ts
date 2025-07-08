import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Survey } from '../surveys/survey.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column('text', { array: true, nullable: true })
  options?: string[];

  @ManyToOne(() => Survey, (survey) => survey.questions)
  survey: Survey;
}
