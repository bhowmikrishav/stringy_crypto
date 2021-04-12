const { stringyEncrypt, stringyDecrypt } = require('stringy_crypto')
const { readFile } = require('fs/promises')
const assert = require('assert')

async function main() {
    try {
        const privateKey = await readFile('./certificates/enc.key')
        const publicKey = await readFile('./certificates/enc.pub')
        const data = { "hello": ["w", "o", "r", ["l", "d"]], "year": "2021" }
        const encryptedData = stringyEncrypt(publicKey, data)
        const decryptedData = stringyDecrypt(privateKey, encryptedData)
        console.log(encryptedData.length);
        assert.deepStrictEqual(data, decryptedData)
    } catch (e) {
        console.error(e);
    }
}

main()