# STRINGY_CRYPTO

Encrypt JS Object into hex string, using public key and decrypt back using private key

**version 0**

This package is ready to use, but may undergo major changes, thus we can not guaranty consistency in future updates.

## Making Public/Private key pair using `openssl`

#### Generate Private RSA key

```sh
openssl genrsa -out enc.key 16384
```

**mod_len of `16384` should be enough for encrypt a dozen kiloBytes**

#### Generate counter Public RSA key

```sh
openssl rsa -in enc.key -out enc.pub -pubout -outform PEM
```

#### Example

![Image](https://scontent.fdel11-2.fna.fbcdn.net/v/t1.6435-9/171822257_904881960277112_4515259399750514944_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=ksytEO1DV7sAX9NCDSK&_nc_ht=scontent.fdel11-2.fna&oh=125255b87ffd78a279698f2458eb085d&oe=609A689C)

## Encrypting the data

```sh
openssl genrsa -out enc.key 1028
openssl rsa -in enc.key -out enc.pub -pubout -outform PEM
```

```js
const { stringyBsonEncrypt } = require('stringy_crypto')
const { readFile } = require('fs/promises')

// load public key
readFile('./enc.pub', 'utf-8')
.then( publicKey => {
    const encryptedString = stringyBsonEncrypt(
        publicKey,
        { "Hello": "World" },
        10
    )
    console.log({ encryptedString })
})
```

## Decrypting the encrypted string

```js
const { stringyBsonDecrypt } = require('stringy_crypto')
const { readFile } = require('fs/promises')

// load private key
readFile('./enc.key', 'utf-8')
.then( privateKey => {
    const encryptedString = `09549d25c7a161372ac471d100dc757e45745f30f3d3153a902995fbcdd0c5349cb76e4e534413928ddba7027ce43f82950d522dc070a80bd16afb922231865d79c3ac9bbed639f321e893973c1ddeac1346ecff0f8c3d995bea736c84daeea2c58b5a61b998d6d16ddc8dfd16365c818c61072ff4a3d5c10ff36d91d3cf4c41e4_0d4bad203fa58cb18af341a1b4d4152c41205832d8c87358ebd7b59158dc9df16be35f9fc0f7713372b151c0755c0bc6170084dc40b081d1e21c259b1e41912af90b6bcee3f3cc49012cad73ab526aaf169e6620e51bb37ef9635675422a0a267cdf89f035bb2afc0e0cdf7526abdffafc6ebb4fad12b198e2ce4481815f9948e1_09f8e261443965b00e433a1694c60cfdb981f4877e1fbb93ef972ba55467db14713f2a6cea5e5df7304e32a9d22432ddd9b88c2d035fef4f4461ec318800a5ea898a719a8c68927a22e662a1e07ec07ad98f4b1e30a9aed2fd71217b8beaef4191ec6c659f1e6d223bf02db074bfa1fe5dece41282defee90ab88a10a5f442b5bb`
    const decryptedData = stringyBsonDecrypt(privateKey, encryptedData)
    console.log({ decryptedData })
})
```