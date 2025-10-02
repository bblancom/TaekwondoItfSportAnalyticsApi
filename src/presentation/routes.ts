import { Router } from "express";
import { MatchesRoutes } from "./matches/routes";

export class AppRoutes{

    static get routes(): Router{
        const router = Router();

        router.use('/api/matches', MatchesRoutes.routes);

        return router;
    }
}