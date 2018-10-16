import { commandeRoute } from "./CommandeRoute";
import { clientRoute } from "./ClientRoute";
import { userRoute } from "./UserRoute";
import { produitRoute } from "./ProduitRoute";


export const Routes = [
    ...commandeRoute,
    ...clientRoute,
    ...userRoute,
    ...produitRoute
];