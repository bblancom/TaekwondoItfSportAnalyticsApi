"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchesRoutes = void 0;
const controller_1 = require("./controller");
const express_1 = require("express");
class MatchesRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const matchesController = new controller_1.MatchesController();
        router.get('/', matchesController.getMatches);
        return router;
    }
}
exports.MatchesRoutes = MatchesRoutes;
