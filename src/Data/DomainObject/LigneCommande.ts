import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from "typeorm";
import { Commande } from "./Commande";
import { Produit } from './Produit';

@Entity()
export class LigneCommande {
    @PrimaryGeneratedColumn()
    idLignecommande: number;

    @ManyToOne(type => Commande, commande => commande.ligneCommande, {onDelete: 'CASCADE'})
    commande: Commande;

    @ManyToOne(type => Produit, produit => produit.ligneCommande, {onDelete: 'CASCADE'})
    produit: Produit;
    
    @Column()
    qte: number;

    constructor(){
        
    }

}