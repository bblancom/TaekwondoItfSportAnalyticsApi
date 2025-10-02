import { MatchesController } from './controller';
import { Router } from "express";

export class MatchesRoutes {
    static get routes(): Router{
        const router = Router();

        const matchesController = new MatchesController();

        router.get('/', matchesController.getMatches);
        router.get('/:id', matchesController.getMatchesById );

        return router;
    }
}