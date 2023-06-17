import { KEY_RSS } from './constants/keyRSS.js';

const parseEnv = () => {
    const rssVariables = Object.entries(process.env).reduce((acc, [key, value]) => {
        if (key.startsWith(KEY_RSS)) {
            acc.push(`${key}=${value}`);
        }

        return acc;
    }, []);

    console.log('rssVariables', rssVariables.join('; '))
};

parseEnv();