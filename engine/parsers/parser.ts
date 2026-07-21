export function parseRows(rows: string[][]): Record<string, string>[] {
  if (rows.length === 0) return [];

  const headers = rows[0];

  return rows.slice(1).map((row) =>
    Object.fromEntries(
      headers.map((header, index) => [
        header.trim(),
        (row[index] ?? "").trim(),
      ])
    )
  );
}