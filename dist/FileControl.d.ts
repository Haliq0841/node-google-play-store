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
/**
 * Read Token
 *
 * @param {string} filePath File Path
 *
 * @returns {Promise<string>}
 */
export declare function readToken(filePath: string): Promise<string>;
/**
 * Write Token
 *
 * @param {string} filePath File Path
 * @param {string} token Token
 */
export declare function writeToken(filePath: string, token: string): Promise<void>;
/**
 * Whether the file or folder exists
 *
 * @param {string} path Path
 *
 * @returns {Promise<boolean>}
 */
export declare function isExists(path: string): Promise<boolean>;
/**
 * Whether the Ext Name match
 *
 * @param {string} fileName File Name
 * @param {string} extName Ext Name
 *
 * @returns {boolean}
 */
export declare function isExtMatch(fileName: string, extName: string): boolean;
/**
 * Download File
 *
 * @param {string} fileUrl File Url
 * @param {string} outputPath Output Save Path
 * @param {string} outputFileName File Save Name
 *
 * @returns {Promise<boolean>}
 */
export declare function downloadFile(fileUrl: string, outputPath: string, outputFileName: string): Promise<boolean>;
