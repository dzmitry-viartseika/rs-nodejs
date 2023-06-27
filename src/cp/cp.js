import { fileNameURLToPath } from '../fs/utils/fileNameURLToPath.js';
import { getDirectoryNamePath } from '../fs/utils/getDirectoryNamePath.js';
const filename = fileNameURLToPath(import.meta.url);
import { spawn } from 'child_process';
const dirname = getDirectoryNamePath(filename);
const spawnChildProcess = async (args) => {
    let isInitiated = false;
    const scriptFile = `${dirname}/files/script.js`;
    const chProcess = spawn('node', [scriptFile, ...args.split('')]);
    process.stdin.on('data', (message) => {
        chProcess.stdin.write(message);
    })

    chProcess.stdin.on('data', (data) => {
        if (!isInitiated) {
            console.log('Proceed to console');
            isInitiated = !isInitiated;
        }
    })
};

await spawnChildProcess('--silent --all');
