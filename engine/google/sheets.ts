import fs from "fs";
import { google } from "googleapis";

const credentials = JSON.parse(
  fs.readFileSync(process.env.GOOGLE_SERVICE_ACCOUNT!, "utf8")
);

const auth = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets.readonly",
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