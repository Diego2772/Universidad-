// app/utils/readImages.ts
import fs from 'fs';
import path from 'path';

export const getImages = (dir: string): string[] => {
  const directoryPath = path.join(process.cwd(), 'public', dir);
  return fs.readdirSync(directoryPath).map(file => path.join('/', dir, file));
};