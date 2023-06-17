import { createReadStream } from 'fs';
import { fileNameURLToPath } from '../fs/utils/fileNameURLToPath.js';
import { getDirectoryNamePath } from '../fs/utils/getDirectoryNamePath.js';
import {UTF_FORMAT} from "../fs/constants/utf8.js";
const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);
const read = async () => {
    const file = `${dirname}/files/fileToRead.txt`;
    const readStream = createReadStream(file, UTF_FORMAT);
    readStream.on('data', (data) => {
        process.stdout.write(data);
    })
};

await read();