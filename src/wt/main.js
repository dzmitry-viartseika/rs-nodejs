import { fileNameURLToPath } from '../fs/utils/fileNameURLToPath.js';
import { getDirectoryNamePath } from '../fs/utils/getDirectoryNamePath.js';
const filename = fileNameURLToPath(import.meta.url);
const dirname = getDirectoryNamePath(filename);
import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { FULFILLED, ERROR, RESOLVED } from "./constants/promiseStatuses.js";

const performCalculations = async () => {
    const cp = cpus();
    const worker = `${dirname}/worker.js`;
    let number = 10;
    const workersResult = await Promise.allSettled(cp.map(() => {
        return new Promise((resolve, reject) => {
            const workerFile = `${dirname}/worker.js`;
            const worker = new Worker(workerFile, {
                workerData: number++
            })
            worker.on('message', message => resolve(message));
            worker.on('error', message => resolve(message));
        })
    }));

    const result = workersResult.map(({status, value}) => ({
        status: status === FULFILLED ? RESOLVED : ERROR,
        data: status === FULFILLED ? value: null
    }));

    console.log('result', result);

    return result;
};

await performCalculations();