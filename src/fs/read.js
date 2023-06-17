import fs from 'fs/promises';
import { fileNameURLToPath } from './utils/fileNameURLToPath.js';
import { getDirectoryNamePath } from './utils/getDirectoryNamePath.js';
import { ERROR_MESSAGE } from './constants/errorMessage.js';
import { UTF_FORMAT } from './constants/utf8.js';

const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);

const read = async () => {
    const file = `${dirname}/files/fileToRead.txt`;
    console.log('file', file)
    try {
        const data = await fs.readFile(file, UTF_FORMAT);
        console.log('data', data);
    } catch (e) {
        throw new Error(ERROR_MESSAGE);
    }
};

await read();