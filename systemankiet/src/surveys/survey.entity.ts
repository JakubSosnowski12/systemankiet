import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Question } from '../questions/question.entity';
import { Response } from '../responses/response.entity';

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()  id: number;
  @Column()                  title: string;
  @Column({ nullable: true })description?: string;

  @OneToMany(() => Question, q => q.survey, { cascade: true })
  questions: Question[];

  @OneToMany(() => Response, r => r.survey, { cascade: true })
  responses: Response[];
}
