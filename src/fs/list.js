import fs from 'fs/promises';
import { fileNameURLToPath } from './utils/fileNameURLToPath.js';
import { getDirectoryNamePath } from './utils/getDirectoryNamePath.js';
import { ERROR_MESSAGE } from './constants/errorMessage.js';

const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);
const list = async () => {
    const srcPath = `${dirname}/files/`;
    try {
        const files = await fs.readdir(srcPath);
        console.log('The folder Files exists the following files:', files)
    } catch (e) {
        throw new Error(ERROR_MESSAGE);
    }
};

await list();