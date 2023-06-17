import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import {fileNameURLToPath} from "../fs/utils/fileNameURLToPath.js";
import {getDirectoryNamePath} from "../fs/utils/getDirectoryNamePath.js";
const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);
import './files/c.js';

const random = Math.random();

const { default: unknownObject } = random > 0.5 ? await import('./files/a.json', { assert: {type: 'json'} }) :
    await import('./files/b.json', { assert: {type: 'json'} });

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is ${path.sep}`);
console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted')
});

export {
    unknownObject,
    createMyServer
}