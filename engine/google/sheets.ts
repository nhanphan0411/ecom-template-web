import fs from "fs";
import { google } from "googleapis";

const credentials = JSON.parse(
  fs.readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT!, "utf8")
);

export const auth = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.readonly"
  ],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

export async function readSheet(sheetName: string) {
  console.log(credentials.client_email);
  console.log(credentials.project_id);
  await auth.authorize();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: sheetName,
  });

  return response.data.values ?? [];
}

export async function writeSheet(
  sheetName: string,
  rows: any[]
) {

  if (rows.length === 0) return;

  const headers = Object.keys(rows[0]);

  const values = [
    headers,
    ...rows.map(row => headers.map(h => row[h]))
  ];

  try {

  await sheets.spreadsheets.values.clear({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: sheetName,
  });

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: sheetName,
    valueInputOption: "RAW",
    requestBody: {
      values,
    },
  });

  console.log("SUCCESS:", sheetName);

} catch (err) {

  console.error(err);

}

}