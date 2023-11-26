const argv = require('yargs').options({
    'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
    },
    'l': {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: false
    },
    'h': {
        alias: 'hasta',
        type: 'number',
    }
}).check((argv, options) => {
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un número'
    }

    return true;
})
.argv;

module.exports = argv;