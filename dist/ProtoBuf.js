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
 * Protocol Buffers
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkDetailsRequest = exports.decode = void 0;
const google_play_1 = require("../proto/google_play");
/**
 * Protocol Buffers Decode
 *
 * @param {Reader | Uint8Array} data Protocol Buffers Data
 *
 * @returns {ResponseWrapper}
 */
function decode(data) {
    return google_play_1.ResponseWrapper.decode(data);
}
exports.decode = decode;
/**
 * Bulk Details Request Buffer
 *
 * @param {string[]} packages App Packages
 *
 * @returns {Uint8Array}
 */
function bulkDetailsRequest(...packages) {
    return google_play_1.BulkDetailsRequest.encode({
        includeChildDocs: true,
        includeDetails: true,
        DocId: packages
    }).finish();
}
exports.bulkDetailsRequest = bulkDetailsRequest;
//# sourceMappingURL=ProtoBuf.js.map