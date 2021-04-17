"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intoChunks = void 0;
const intoChunks = (dataBuffer, mod_len) => {
    var chunks = [];
    for (var i = 0; i < dataBuffer.length; i += mod_len) {
        chunks.push(dataBuffer.slice(i, i + mod_len));
    }
    return chunks;
};
exports.intoChunks = intoChunks;
