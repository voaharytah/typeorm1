import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import { Commande } from "./Commande";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    idClient: number;

    @Column()
    name: string;

    @Column()
    address: string;
    
    @OneToMany(type => Commande, commande => commande.client)
    commandes: Commande[];

    @Column()
    createdAt: Date;

    @Column()
    updatetedAt: Date;

    @BeforeInsert()
    setCreatedDate() {
        this.createdAt = new Date();
    }

    @BeforeUpdate()
    setUpdatedDate() {
        this.updatetedAt = new Date();
    }

}