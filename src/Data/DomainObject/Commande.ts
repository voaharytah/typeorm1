import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BeforeInsert } from "typeorm";
import { Client } from "./Client";
import { LigneCommande } from './LigneCommande';

@Entity()
export class Commande {
    @PrimaryGeneratedColumn()
    idCommande: number;

    @Column()
    dateCommande: Date;

    @ManyToOne(type => Client, client => client.commandes)
    client: Client;

    @OneToMany(type => LigneCommande, ligneCommande => ligneCommande.commande, { cascade: true })
    ligneCommande: LigneCommande[];

    @BeforeInsert()
    setDateCommande(){
        this.dateCommande = new Date();
    }
}