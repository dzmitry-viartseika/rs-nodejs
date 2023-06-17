import fs from 'fs/promises';
import { fileNameURLToPath } from './utils/fileNameURLToPath.js';
import { getDirectoryNamePath } from './utils/getDirectoryNamePath.js';
import { ERROR_MESSAGE } from './constants/errorMessage.js';

const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);
const folderName = 'files_copy';
const copy = async () => {
    const srcPath = `${dirname}/files/`;
    const newFolderName = `${dirname}/${folderName}`;
    console.log('newFolderName', newFolderName)
    try {
        await fs.mkdir(newFolderName);
        const files = await fs.readdir(srcPath);
        console.log('files', files)
        await Promise.all(files.map((file) => fs.copyFile(`${srcPath}/${file}`, `${newFolderName}/${file}`)));
        console.log(`The file is copied successfully: ${files}`)
    } catch (e) {
        throw new Error(ERROR_MESSAGE);
    }
};

await copy();
