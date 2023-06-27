import fs from 'fs/promises';
import { fileNameURLToPath } from './utils/fileNameURLToPath.js';
import { getDirectoryNamePath } from './utils/getDirectoryNamePath.js';
import { ERROR_MESSAGE } from './constants/errorMessage.js';

const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);

const rename = async () => {
    const wrongFileName = `${dirname}/files/wrongFilename.txt`;
    const properFileName = `${dirname}/files/properFilename.md`;

    try {
        await  fs.rename(wrongFileName, properFileName);
        console.log('The file is renamed successfully!');
    } catch (e) {
        throw new Error(ERROR_MESSAGE);
    }
};

await rename();