import { google } from 'googleapis'
import { Match } from '../models/Match';

// Google Sheets configuration
const SPREADSHEET_ID = '1xYu8W0B9W9ZjpaEbVn9rYr_1SP56ZQvWHey6tlj4GUE'; // Extract from Google Sheets URL
const RANGE = 'Sparring!A1:AB451'; // Adjust range as needed

// Initialize Google Sheets API
const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json', // Path to your service account key
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function fetchMatches(){

    const response = await sheets.spreadsheets.values.get({
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
      const rowData: any = {};
      
      headers.forEach((header, index) => {
        rowData[header] = row[index] || '';
      });

      // Map to your class (adjust property names as needed)
      return new Match({
        id: index + 1,
        datetime: rowData['datetime'],
        ring: rowData['ring'],
        category: rowData['category'],
        round: rowData['round'],
        link: rowData['link'],

        blueCompetitor: rowData['blue'],
        blueCountry: rowData['blue country'],
        blueWarnings: rowData['blue total warnings'],
        blueFouls: rowData['blue total fouls'],
        blueIsWinner: rowData['blue iswinner'],
        blueScores: [rowData['blue umpire 1 scores'], rowData['blue umpire 2 scores'], rowData['blue umpire 3 scores'], rowData['blue umpire 4 scores']],

        redCompetitor: rowData['red'],
        redCountry: rowData['red country'],
        redWarnings: rowData['red total warnings'],
        redFouls: rowData['red total fouls'],
        redIsWinner: rowData['blue iswinner'],
        redScores: [rowData['red umpire 1 scores'], rowData['red umpire 2 scores'], rowData['red umpire 3 scores'], rowData['red umpire 4 scores']],
      });
    });

    return data;
}