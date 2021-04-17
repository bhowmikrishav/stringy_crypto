"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringyBsonDecrypt = void 0;
const crypto_1 = require("crypto");
const bson_1 = require("bson");
/**
 * @description decripts encrypted hex string using private RSA key
 * @param privateKey private RSA key
 * @param data encrypted hex string with '_' spliters
 * @returns decrypted Object
 */
const stringyBsonDecrypt = (privateKey, data) => {
    // convert hex string to Buffer
    const encryptedString = data;
    const encryptedChunkArray = encryptedString.split('_');
    // decrypt encrypted buffer data using private key
    const chunks = encryptedChunkArray.map(chunk => Buffer.from(chunk, 'hex'));
    const decryptedChunk = chunks.map(chunk => crypto_1.privateDecrypt(privateKey, chunk));
    const dataBuffer = Buffer.concat(decryptedChunk);
    const document = bson_1.deserialize(dataBuffer);
    const result = document;
    return result;
};
exports.stringyBsonDecrypt = stringyBsonDecrypt;
