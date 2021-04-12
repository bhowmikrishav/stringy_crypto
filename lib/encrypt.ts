import { KeyLike, publicEncrypt, RsaPublicKey } from 'crypto'
import { serialize, Document } from 'bson'
import { intoChunks } from './intoChunks'

export const stringyEncrypt = (publicKey: RsaPublicKey | KeyLike, data: Document, mod_len: number) => {
    const dataBuffer: Buffer = serialize(data)
    const chunks = intoChunks(dataBuffer, mod_len)
    // Make encryptedChunks using public encryption key
    const encryptedChunkArray = chunks.map(
        chunk => publicEncrypt(publicKey, chunk).toString('hex')
    )
    const encryptedString = encryptedChunkArray.join('_')
    return encryptedString
}