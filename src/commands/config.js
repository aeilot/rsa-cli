const output = require('../functions/output')
const userConfig = require('../functions/userConfig')
const getString = require('../functions/getString')

module.exports = (args) => {
    const argv = args.argv

    return new Promise(async (resolve, reject) => {
        const get = async () => {
            await userConfig.load()
            const key = argv[4]
            const value = await userConfig.get({ allowDefault: false })[argv[4]]
            var item = {}
            item[key] = value
            output(args, `${key}: ${value}`)
            resolve(item)
        }

        const set = async () => {
            await userConfig.load()
            const key = argv[4]
            const value = argv[5] == 'unset' ? undefined : argv[5]
            var item = {}
            item[key] = value
            await userConfig.set(item)
            output(args, `${key}: ${value}`)
            resolve(item)
        }

        const list = async () => {
            await userConfig.load()
            const config = await userConfig.get({ allowDefault: false })
            if (!args.params.quiet) { console.table(config) }
            resolve(config)
        }

        switch (argv[3]) {
            case 'get':
                get();
                break;
            case 'set':
                set();
                break;
            case 'list':
                list();
                break;
            default:
                reject(require('../functions/err')(`${typeof argv[3] != 'undefined' ? await getString('unknown-sub-command', { a: argv[3] }) : await getString('no-sub-command-provided')}\n\n${await getString('get-more-instructions-by-running')}\n${require('chalk').bold.cyan(`$`)} rsa help config`, { code: 'RSA_CLI:UNKNOWN_SUB_COMMAND' }))
                break;
        }
    })
}