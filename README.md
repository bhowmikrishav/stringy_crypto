# STRINGY_CRYPTO

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
