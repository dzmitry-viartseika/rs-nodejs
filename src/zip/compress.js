import { fileNameURLToPath } from '../fs/utils/fileNameURLToPath.js';
import { createGzip } from 'zlib';
import { getDirectoryNamePath } from '../fs/utils/getDirectoryNamePath.js';
import {createReadStream, createWriteStream} from "fs";
const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);
const compress = async () => {
    const compressFile = `${dirname}/files/fileToCompress.txt`;
    const archiveFile = `${dirname}/files/archive.gz`;
    const readStream = createReadStream(compressFile);
    const writeStream = createWriteStream(archiveFile);
    const toGz = createGzip();
    readStream.pipe(toGz).pipe(writeStream);
    console.log('The file is archived');
};

await compress();