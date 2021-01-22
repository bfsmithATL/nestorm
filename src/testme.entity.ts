import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TestMe')
export class TestMeEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  catalogNumber!: string;

  @Column()
  image!: string;

  @Column()
  minimumPrice!: number;
}
