import fs from 'fs/promises';
import { createHash } from 'crypto';
import { fileNameURLToPath } from '../fs/utils/fileNameURLToPath.js';
import { getDirectoryNamePath } from '../fs/utils/getDirectoryNamePath.js';
const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);

const calculateHash = async () => {
    try {
        const fileForCalculateHash = `${dirname}/files/fileToCalculateHashFor.txt`;
        const file = await fs.readFile(fileForCalculateHash);
        const hash = createHash('sha256').update(file).digest('hex');
        console.log(`Hash: ${hash}`);
    } catch (err) {
        throw err;
    }
};

await calculateHash();