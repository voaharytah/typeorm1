import { ProduitFactory } from "@data/Factory/ProduitFactory";
import { Service, Container } from "typedi";
import { ProduitSMImpl } from "../../ServiceMetier/ProduitSM/ProduitSMImpl";

export interface produitSAaci {
  mostOrderedProduct(searchParams: any);
  deleteProduit(criteria: any);
}

@Service()
export class produitSAImpl implements produitSAaci {
  produitSM: ProduitSMImpl = Container.get(ProduitSMImpl);
  produitFactory: ProduitFactory = Container.get(ProduitFactory);

  async deleteProduit(criteria: any) {
    return this.produitSM.deleteProduit(criteria);
  }

  async mostOrderedProduct(searchParams: any) {
    const resultDo = await this.produitSM.mostOrderedProduct(searchParams);
    return this.produitFactory.mostOrderedProductDto(resultDo);
  }
}
