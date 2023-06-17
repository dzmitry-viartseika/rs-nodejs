import {DASHES} from "./constants/dashes.js";

const parseArgs = () => {
    const inputArgs = process.argv.slice(2);
    const argumentsList = inputArgs.reduce((acc, arg, index, array) => {
        const valueCandidate = array[index + 1];
        if (valueCandidate && arg.startsWith(DASHES)) {
            const transformedArguments = arg.slice(2);
            const transformedCliArguments = `${transformedArguments} is ${valueCandidate}`;
            acc.push(transformedCliArguments);
        }

        return acc;
    }, []);

    console.log(argumentsList.join(', '));
};

parseArgs();