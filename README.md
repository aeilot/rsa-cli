<p align="center"><img src="./icon.png" alt="The logo of RSA CLI" width="84" height="84"></p>

<h3 align="center">RSA CLI</h3>

<p align="center">A command line tool for RSA encryption and decryption.</p>

```sh
$ rsa generate myKey -l 1024
Generated a new key pair: 'myKey'
$ rsa encrypt myKey 'Hello, World!'
Encrypted 'Hello, World!' with key 'myKey':
.........
$ rsa decrypt myKey '.........'
Decrypted '.........' with key 'myKey
Hello, World!
```

## Installation

### Use Executable

Download the executable from [Releases](https://github.com/MrWillCom/rsa-cli/releases), you don't even install it. If you want, you can rename this to `rsa` and add it to `PATH`.

### Use npm or Yarn

```sh
$ yarn global add rsa-cli
# or
$ npm install --global rsa-cli
```

## Documentation

Check out [docs/](docs/)
