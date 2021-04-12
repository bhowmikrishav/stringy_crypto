import { KeyLike, privateDecrypt, RsaPrivateKey } from "crypto";
import { deserialize, Binary } from 'bson';

type TypeEncryptedCapsule = {
    chunks: Binary[]
}

export const stringyDecrypt = <T>(privateKey: RsaPrivateKey | KeyLike, data: string) => {
    // convert hex string to Buffer
    const encryptedString = data
    const encryptedChunkArray = encryptedString.split('_')
    // decrypt encrypted buffer data using private key
    const chunks: Buffer[] = encryptedChunkArray.map(
        chunk=>Buffer.from(chunk, 'hex')
    )
    const decryptedChunk = chunks.map(chunk=>
        privateDecrypt(
            privateKey, chunk
        )
    )
    const dataBuffer = Buffer.concat(decryptedChunk)
    const document:any = deserialize(dataBuffer)
    const result:T = document
    return result
}