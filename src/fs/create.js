import fs from 'fs/promises';
import { getDirectoryNamePath } from './utils/getDirectoryNamePath.js';
import { fileNameURLToPath } from './utils/fileNameURLToPath.js';


const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);

const newText = 'I am fresh and young';
const errorMessage = 'FS operation failed';
export const create = async () => {
    const srcPath = `${dirname}/files/fresh.text`;

    try {
        await fs.writeFile(srcPath, newText, { flag: 'wx'});
        console.log(`${newText} have added to the fresh.txt`);
    } catch (e) {
        throw new Error(errorMessage);
    }
};

await create();