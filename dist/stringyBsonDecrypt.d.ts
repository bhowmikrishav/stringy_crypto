import { KeyLike, RsaPrivateKey } from "crypto";
/**
 * @description decripts encrypted hex string using private RSA key
 * @param privateKey private RSA key
 * @param data encrypted hex string with '_' spliters
 * @returns decrypted Object
 */
export declare const stringyBsonDecrypt: <T>(privateKey: RsaPrivateKey | KeyLike, data: string) => T;
