import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { LigneCommande } from './LigneCommande';

@Entity()
export class Produit {
    @PrimaryGeneratedColumn()
    idProduit: number;

    @Column()
    libelle: string;

    @Column("double")
    pu: number;

    @Column("double")
    qte: number;

    @OneToMany(type => LigneCommande, lignecommande => lignecommande.produit, { cascade: true })
    ligneCommande: LigneCommande[];

    constructor(_libelle: string, _pu: number) {
        this.libelle = _libelle;
        this.pu = _pu;
    }
}