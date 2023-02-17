const xmlParser = require('xml2json');
const fs = require('fs')

const xml = fs.readFileSync('./radio library.xml', 'utf-8')

fs.writeFileSync('./parsed.json', JSON.stringify(JSON.parse(xmlParser.toJson(xml)), null, 2))