import fs from 'fs';

function loadData(filePath, varName) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const script = content.replace(`const ${varName}`, `globalThis.${varName}`);
  eval(script);
  const data = globalThis[varName];
  delete globalThis[varName];
  return data;
}

const dioses = loadData('src/data/_dioses.js', 'dioses');
const diosesArray = Object.entries(dioses).map(([id, obj]) => ({ id, ...obj, tipo: 'dios' }));
fs.writeFileSync('src/data/dioses.json', JSON.stringify(diosesArray, null, 2));
console.log(`✅ dioses.json creado con ${diosesArray.length} deidades.`);

const criaturasDB = loadData('src/data/_criaturas.js', 'criaturasDB');
const criaturasArray = criaturasDB.map(obj => ({ ...obj, tipo: 'criatura' }));
fs.writeFileSync('src/data/criaturas.json', JSON.stringify(criaturasArray, null, 2));
console.log(`✅ criaturas.json creado con ${criaturasArray.length} criaturas.`);

const lugaresDB = loadData('src/data/_lugares.js', 'lugaresDB');
const lugaresArray = lugaresDB.map(obj => ({ ...obj, tipo: 'lugar' }));
fs.writeFileSync('src/data/lugares.json', JSON.stringify(lugaresArray, null, 2));
console.log(`✅ lugares.json creado con ${lugaresArray.length} lugares.`);