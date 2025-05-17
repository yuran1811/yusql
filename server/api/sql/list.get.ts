import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

export default defineEventHandler(async (_event) => {
  try {
    const items = await fs.readdir(path.join(process.cwd(), 'public', 'db'));

    return { items: items.filter((item) => item.endsWith('.db')) };
  } catch (error: any) {
    console.error('[error] - "/api/sql/list.get.ts":', error);

    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }
});
