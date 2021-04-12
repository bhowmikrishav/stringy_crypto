import { KeyLike, publicEncrypt, RsaPublicKey } from 'crypto'
import { serialize } from 'bson'

/**
 * 
 * @param publicKey - Public RSA key for encrypting the data
 * @param data - Javascript string, Object
 * @returns 
 */
export const stringyEncrypt = (publicKey: RsaPublicKey | KeyLike, data: any) => {
    // Make Encrypted data Buffer using public encryption key
    const dataBuffer: Buffer = serialize({data})
    const encryptedDataBuffer: Buffer = publicEncrypt(publicKey, dataBuffer)
    // Convert encrypted buffer data into hex string array
    return encryptedDataBuffer.toString('hex')
}