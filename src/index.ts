import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./Contrainte/Config/Routes/AppRoutes";
import { Container } from "typedi";
import { JwtUtility } from "./Commun/Token/JwtUtility";
import { AppConfig } from './Contrainte/Config/AppConfig/AppConfig';

useContainer(Container)
createConnection().then(async connection => {

    const app = express();
    app.use(AppConfig.allowCrossDomain);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(new JwtUtility().verifyToken);

    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
                .then(() => next)
                .catch(err => next(err));
        });
    });
    app.listen(3000);
    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");
}).catch(error => console.log(error));
