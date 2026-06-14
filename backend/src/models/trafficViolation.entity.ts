import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class TrafficViolationEntity {
  @PrimaryGeneratedColumn() id!: number;
  @Column() vehicleId!: number;
  @Column() driverId!: number;
  @Column() violationType!: string;
  @Column() violationDate!: string;
  @Column() location!: string;
  @Column() description!: string;
  @Column('float') fineAmount!: number;
  @Column('int') pointsDeducted!: number;
  @Column() status!: string;
  @Column() handledBy!: string;
  @Column() handledDate!: string;
  @Column() remark!: string;
}
