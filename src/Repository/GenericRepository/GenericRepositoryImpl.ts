import { Service } from "typedi";
import { InjectConnection } from "../../../node_modules/typeorm-typedi-extensions";

@Service()
export class GenericRepositoryImpl<T> {
    @InjectConnection()
    connection;

    addData(data: T) {
        return this.connection.mananger.save(data);
    }

    // deleteData(data: T) {
    //     return this.connection.getReposiroty(T).save(data);;
    // }
}