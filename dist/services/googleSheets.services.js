"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMatches = fetchMatches;
const googleapis_1 = require("googleapis");
const Match_1 = require("../models/Match");
// Google Sheets configuration
const SPREADSHEET_ID = '1xYu8W0B9W9ZjpaEbVn9rYr_1SP56ZQvWHey6tlj4GUE'; // Extract from Google Sheets URL
const RANGE = 'Sparring!A1:AB451'; // Adjust range as needed
// Initialize Google Sheets API
const auth = new googleapis_1.google.auth.GoogleAuth({
    keyFile: 'credentials.json', // Path to your service account key
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});
const sheets = googleapis_1.google.sheets({ version: 'v4', auth });
function fetchMatches() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: RANGE,
        });
        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            return [];
        }
        // First row contains headers
        const headers = rows[0].map(h => h.toLowerCase().trim());
        // Map remaining rows to SheetRow class instances
        const data = rows.slice(1).map((row, index) => {
            const rowData = {};
            headers.forEach((header, index) => {
                rowData[header] = row[index] || '';
            });
            // Map to your class (adjust property names as needed)
            return new Match_1.Match({
                id: index,
                blueCompetitor: rowData['blue'],
                blueCountry: rowData['bluecountry'],
                redCompetitor: rowData['red'],
                redCountry: rowData['redcountry']
            });
        });
        return data;
    });
}
