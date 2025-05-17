import Database from 'better-sqlite3';

interface ReturnType {
  result: {
    [key: string]: string | number | boolean | null;
  }[];
  error?: string;
}

export default defineEventHandler(async (event) => {
  try {
    const name = getRouterParam(event, 'name');
    const body = await readBody(event);

    const db = new Database(`public/db/${name}`);
    db.pragma('journal_mode = WAL');
    const sql = body.sql;

    return { result: db.prepare(sql).all() } as ReturnType;
  } catch (error: any) {
    console.error('[error] - "/api/sql/[name].post.ts":', error);

    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }
});
