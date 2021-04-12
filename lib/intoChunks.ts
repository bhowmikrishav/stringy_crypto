export const intoChunks = (dataBuffer: Buffer, mod_len: number) => {
    var chunks: Buffer[] = []
    for (var i = 0; i < dataBuffer.length; i += mod_len) {
        chunks.push(
            dataBuffer.slice(i, i + mod_len)
        )
    }
    return chunks
}