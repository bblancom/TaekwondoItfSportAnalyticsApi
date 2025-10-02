export class Match{
    id?: number;
    datetime?: string;
    ring?: number;
    category?: string;
    round?: string;

    blueCompetitor?: string;
    blueCountry?: string;
    blueWarnings?: number;
    blueFouls?: number;
    blueIsWinner?: boolean;

    blueScores?: number[];

    redCompetitor?: string;
    redCountry?: string;
    redWarnings?: number;
    redFouls?: number;
    redIsWinner?: boolean;

    redScores?: number[];

    link?: string;

    constructor(data: Partial<Match>) {
        this.id = data.id;
        this.datetime = data.datetime;
        this.ring = data.ring;
        this.category = data.category;
        this.round = data.round;
        this.link = data.link;

        this.blueCompetitor =  data.blueCompetitor;
        this.blueCountry = data.blueCountry;
        this.blueWarnings = data.blueWarnings;
        this.blueFouls = data.blueFouls;
        this.blueIsWinner = data.blueIsWinner;
        this.blueScores = data.blueScores;

        this.redCompetitor = data.redCompetitor;
        this.redCountry = data.redCountry;
        this.redWarnings = data.redWarnings;
        this.redFouls = data.redFouls;
        this.redScores = data.redScores;
    }
}
