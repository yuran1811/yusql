import Database from 'better-sqlite3';

interface ReturnType {
  result: {
    [key: string]: string | number | boolean | null;
  }[];
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const db = new Database('public/data.db');
  db.pragma('journal_mode = WAL');
  const sql = body.sql;

  return { result: db.prepare(sql).all() } as ReturnType;
});
