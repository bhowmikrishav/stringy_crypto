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

#### Example

![Image](https://scontent.fdel11-2.fna.fbcdn.net/v/t1.6435-9/171822257_904881960277112_4515259399750514944_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=ksytEO1DV7sAX9NCDSK&_nc_ht=scontent.fdel11-2.fna&oh=125255b87ffd78a279698f2458eb085d&oe=609A689C)