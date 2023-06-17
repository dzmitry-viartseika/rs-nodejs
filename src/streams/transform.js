import { Transform } from 'stream';
import { EOL } from 'os'
const transform = async () => {
    const revert = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, `${chunk.toString().replace(EOL, '').split('').reverse().join('')}EOL`)
        }
    })

    process.stdin.pipe(revert).pipe(process.stdout);
    console.log('Write to console')
};

await transform();