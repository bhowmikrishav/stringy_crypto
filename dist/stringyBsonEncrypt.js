"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringyBsonEncrypt = void 0;
const crypto_1 = require("crypto");
const bson_1 = require("bson");
const intoChunks_1 = require("./intoChunks");
/**
 * @description encryptes data using public key
 * @param publicKey public RSA key
 * @param data data to encrypt
 * @param mod_len maximum padding wrt key size
 * @returns encrypted hex string with '_' spliters
 */
const stringyBsonEncrypt = (publicKey, data, mod_len) => {
    const dataBuffer = bson_1.serialize(data);
    const chunks = intoChunks_1.intoChunks(dataBuffer, mod_len);
    // Make encryptedChunks using public encryption key
    const encryptedChunkArray = chunks.map(chunk => crypto_1.publicEncrypt(publicKey, chunk).toString('hex'));
    const encryptedString = encryptedChunkArray.join('_');
    return encryptedString;
};
exports.stringyBsonEncrypt = stringyBsonEncrypt;
