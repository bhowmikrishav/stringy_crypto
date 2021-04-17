import { KeyLike, RsaPublicKey } from 'crypto';
import { Document } from 'bson';
/**
 * @description encryptes data using public key
 * @param publicKey public RSA key
 * @param data data to encrypt
 * @param mod_len maximum padding wrt key size
 * @returns encrypted hex string with '_' spliters
 */
export declare const stringyBsonEncrypt: (publicKey: RsaPublicKey | KeyLike, data: Document, mod_len: number) => string;
