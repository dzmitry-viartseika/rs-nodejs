import { fileNameURLToPath } from '../fs/utils/fileNameURLToPath.js';
import { createUnzip } from 'zlib';
import { getDirectoryNamePath } from '../fs/utils/getDirectoryNamePath.js';
import {createReadStream, createWriteStream} from "fs";
const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);
const decompress = async () => {
    const compressFile = `${dirname}/files/fileToCompress.txt`;
    const archiveFile = `${dirname}/files/archive.gz`;
    const writeStream = createWriteStream(compressFile);
    const readStream = createReadStream(archiveFile);
    const fromGz = createUnzip();
    readStream.pipe(fromGz).pipe(writeStream);
    console.log('The file is unarchived');
};

await decompress();