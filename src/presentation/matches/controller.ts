import { todo } from 'node:test';
import { fetchMatches } from '../../services/googleSheets.services';
import {Response, Request} from 'express'

export class MatchesController{
    constructor(){}

    public getMatches = async (req: Request, res: Response) => {
        const matches = await fetchMatches();

        return res.json(matches)
    };

    public getMatchesById = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const matches = await fetchMatches();
        const retVal = matches.find( match => match.id === id);

        (retVal)
        ? res.json(retVal)
        : res.status(404).json({error: `Match with id [${id}] not found`})
    };
}