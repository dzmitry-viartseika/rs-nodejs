import { createWriteStream } from 'fs';
import { fileNameURLToPath } from '../fs/utils/fileNameURLToPath.js';
import { getDirectoryNamePath } from '../fs/utils/getDirectoryNamePath.js';
const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);
const write = async () => {
    const file = `${dirname}/files/fileToRead.txt`;
    const writeStream = createWriteStream(file);
    process.stdout.on('data', (data) => {
        writeStream.write(data.toString());
    })
    console.log('check you console')
};

await write();