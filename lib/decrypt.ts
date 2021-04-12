import { KeyLike, privateDecrypt, RsaPrivateKey } from "crypto";
import { deserialize } from 'bson';

export const stringyDecrypt = <T>(privateKey: RsaPrivateKey | KeyLike, data: string) => {
    // convert hex string to Buffer
    const encryptedDataBuffer: Buffer = Buffer.from(data, 'hex')
    // decrypt encrypted buffer data using private key
    const decryptedDataBuffer: Buffer = privateDecrypt(privateKey, encryptedDataBuffer)
    const document:any = deserialize(decryptedDataBuffer)
    const result:T = document.data
    return result
}