"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
class Match {
    // redWarnings: number;
    // redFouls: number;
    // redIsWinner: boolean;
    constructor(data) {
        this.id = data.id;
        this.blueCompetitor = data.blueCompetitor;
        this.blueCountry = data.blueCountry;
        this.redCompetitor = data.redCompetitor;
        this.redCountry = data.redCountry;
    }
}
exports.Match = Match;
