const fs = require('fs');

const fileNameMap = require('./file-name-map.json');

const listMaps = () => {
    const files = fs.readdirSync('maps/');

    const list = files
        .map(file => {
            if (file.endsWith('.map') && !file.endsWith('_trans.map')) {
                const name = file.slice(0, -4);
                const [from, to] = name.split('_').map(x => fileNameMap[x]);
                return `- [ ] [${from} to ${to}](${file}) [[transparency]](${name}_trans.map)`;
            }
        })
        .filter(Boolean)
        .join('\n');

    return list;
};

const generateReadme = () =>
    fs.writeFileSync('maps/README.md', `# Map Files\n\n${listMaps()}`);

const createMaps = () => {
    const [, , , name, alias] = process.argv;

    if (!name || !alias) {
        console.log('Not enough arguments');
        process.exit(1);
    } else if (name in fileNameMap) {
        console.log(`${name} already exists`);
        process.exit(1);
    }

    Object.keys(fileNameMap).forEach(fileName => {
        fs.writeFileSync(`maps/${fileName}_${name}.map`, '');
        fs.writeFileSync(`maps/${fileName}_${name}_trans.map`, '');

        fs.writeFileSync(`maps/${name}_${fileName}.map`, '');
        fs.writeFileSync(`maps/${name}_${fileName}_trans.map`, '');
    });

    fileNameMap[name] = alias;
    fs.writeFileSync(
        'file-name-map.json',
        JSON.stringify(fileNameMap, null, 2)
    );

    generateReadme();
    console.log('Done');
};

switch (process.argv[2].toLowerCase()) {
    case 'create':
        createMaps();
        break;

    case 'readme':
        generateReadme();
        break;

    default:
        console.log('Invalid command');
        process.exit(1);
}
