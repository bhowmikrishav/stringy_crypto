const { stringyBsonDecrypt, stringyBsonEncrypt, intoChunks } = require('../dist/')
const { readFile } = require('fs/promises')
const assert = require('assert')

describe("Utils", () => {
    it("intoChunks function", () => {
        const mod_length = 10
        const buffer = Buffer.from("The Sun is composed primarily of the chemical elements hydrogen and helium")
        const bufferChunks = intoChunks(buffer, mod_length)
        //asserts
        const expectedNumberOfChunks = Math.ceil(buffer.length / mod_length)
        assert.strictEqual(expectedNumberOfChunks, bufferChunks.length)
        const expectedSizeOfLastChunk = buffer.length % mod_length
        assert.strictEqual(
            expectedSizeOfLastChunk,
            bufferChunks[bufferChunks.length - 1].length
        )
    })
})
describe("BsonDecrypt", () => {
    it("stringyBsonEncrypt & stringyBsonDecrypt", async () => {
        const privateKey = await readFile(__dirname + '/../examples/certificates/enc.key', 'utf-8')
        const publicKey = await readFile(__dirname + '/../examples/certificates/enc.pub', 'utf-8')
        const data = { "hello": ["w", "o", "r", ["l", "d", 9, 8, 7, 6, 5, 4, 3, 2, 1]], "year": "2021" }
        const encryptedData = stringyBsonEncrypt(publicKey, data, 10)
        const decryptedData = stringyBsonDecrypt(privateKey, encryptedData)
        assert.deepStrictEqual(data, decryptedData)
    })
})