import { KeyLike, publicEncrypt, RsaPublicKey } from 'crypto'
import { serialize, Document } from 'bson'
import { intoChunks } from './intoChunks'

/**
 * @description encryptes data using public key
 * @param publicKey public RSA key
 * @param data data to encrypt
 * @param mod_len maximum padding wrt key size
 * @returns encrypted hex string with '_' spliters
 */
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