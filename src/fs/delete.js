import fs from 'fs/promises';
import { fileNameURLToPath } from './utils/fileNameURLToPath.js';
import { getDirectoryNamePath } from './utils/getDirectoryNamePath.js';
import { ERROR_MESSAGE } from './constants/errorMessage.js';

const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);
const remove = async () => {
    const fileForDeleting = `${dirname}/files/fileToRemove.txt`;
    try {
        await fs.unlink(fileForDeleting);
        console.log('The file is deleted successfully!')
    } catch (e) {
        throw new Error(ERROR_MESSAGE);
    }
};

await remove();