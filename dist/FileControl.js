"use strict";
/**
 * Copyright 2022 GoneTone
 *
 * Google Play API (Unofficial Node.js Library)
 * https://github.com/GoneToneStudio/node-google-play-api
 *
 * @author   張文相 Wenxiang Zhang (旋風之音 GoneTone) <https://blog.reh.tw>
 * @license  MIT <https://github.com/GoneToneStudio/node-google-play-api/blob/master/LICENSE>
 *
 * File Control
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = exports.isExtMatch = exports.isExists = exports.writeToken = exports.readToken = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const axios_1 = tslib_1.__importDefault(require("axios"));
/**
 * Read Token
 *
 * @param {string} filePath File Path
 *
 * @returns {Promise<string>}
 */
async function readToken(filePath) {
    try {
        const pathIsExists = await isExists(filePath);
        if (pathIsExists) {
            const data = await fs_1.default.promises.readFile(filePath, 'utf-8');
            return data.toString();
        }
        return filePath;
    }
    catch (e) {
        throw Error(`Read Token Failed: ${e.message}`);
    }
}
exports.readToken = readToken;
/**
 * Write Token
 *
 * @param {string} filePath File Path
 * @param {string} token Token
 */
async function writeToken(filePath, token) {
    const dirName = path_1.default.dirname(filePath);
    try {
        const pathIsExists = await isExists(dirName);
        if (!pathIsExists) {
            await fs_1.default.promises.mkdir(dirName, {
                recursive: true
            });
        }
        await fs_1.default.promises.writeFile(filePath, token);
    }
    catch (e) {
        throw Error(`Write Token Failed: ${e.message}`);
    }
}
exports.writeToken = writeToken;
/**
 * Whether the file or folder exists
 *
 * @param {string} path Path
 *
 * @returns {Promise<boolean>}
 */
async function isExists(path) {
    let pathIsExists;
    try {
        await fs_1.default.promises.stat(path);
        pathIsExists = true;
    }
    catch (e) {
        pathIsExists = false;
    }
    return pathIsExists;
}
exports.isExists = isExists;
/**
 * Whether the Ext Name match
 *
 * @param {string} fileName File Name
 * @param {string} extName Ext Name
 *
 * @returns {boolean}
 */
function isExtMatch(fileName, extName) {
    return (path_1.default.extname(fileName) === `.${extName}`);
}
exports.isExtMatch = isExtMatch;
/**
 * Download File
 *
 * @param {string} fileUrl File Url
 * @param {string} outputPath Output Save Path
 * @param {string} outputFileName File Save Name
 *
 * @returns {Promise<boolean>}
 */
async function downloadFile(fileUrl, outputPath, outputFileName) {
    const dirName = path_1.default.dirname(path_1.default.join(outputPath, outputFileName));
    const pathIsExists = await isExists(dirName);
    if (!pathIsExists) {
        await fs_1.default.promises.mkdir(dirName, {
            recursive: true
        });
    }
    const writer = fs_1.default.createWriteStream(path_1.default.format({
        dir: dirName,
        name: outputFileName
    }));
    const response = await (0, axios_1.default)({
        url: fileUrl,
        method: 'GET',
        responseType: 'stream'
    });
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
        writer.on('finish', () => {
            resolve(true);
        });
        writer.on('error', (e) => {
            reject(Error(`Download File Failed: ${e.message}`));
        });
    });
}
exports.downloadFile = downloadFile;
//# sourceMappingURL=FileControl.js.map