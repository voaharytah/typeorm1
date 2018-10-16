import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    login: string;

    @Column()
    password: string;

}
