const { stringyEncrypt, stringyDecrypt } = require('stringy_crypto')
const { readFile } = require('fs/promises')
const assert = require('assert')

async function main() {
    try {
        const privateKey = await readFile('./certificates/enc.key', 'utf-8')
        const publicKey = await readFile('./certificates/enc.pub', 'utf-8')
        const data = { "hello": ["w", "o", "r", ["l", "d"]], "year": "2021" }
        const encryptedData = stringyEncrypt(publicKey, data, 10)
        const decryptedData = stringyDecrypt(privateKey, encryptedData)
        assert.deepStrictEqual(data, decryptedData)
    } catch (e) {
        console.error(e);
    }
}

main()