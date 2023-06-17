import { dirname } from 'path';
export const getDirectoryNamePath = (fileName) => {
    return dirname(fileName);
}