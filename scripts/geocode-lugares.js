import fs from 'fs';

// ----------------------------------------------------------------------
// CONFIGURACIÓN
// ----------------------------------------------------------------------
const ARCHIVO_LUGARES = 'public/data/lugares.json';

// Coordenadas aproximadas del centro de cada región (plan B)
const COORDENADAS_POR_REGION = {
  caribe:    [10.5, -74.0],   // Centro aproximado del Caribe colombiano
  andina:    [4.5,  -74.5],   // Región Andina
  pacifica:  [3.5,  -77.0],   // Pacífico
  orinoquia: [5.0,  -70.0],   // Orinoquía
  amazonia:  [-0.5, -73.0],   // Amazonía
  insular:   [12.5, -81.7],   // San Andrés y Providencia
};

// ----------------------------------------------------------------------
// FUNCIÓN PARA GEOCODIFICAR UN LUGAR (con plan B)
// ----------------------------------------------------------------------
async function geocode(lugar) {
  // Construir la consulta incluyendo la región y "Colombia"
  const region = lugar.region || '';
  const query = `${lugar.nombre}, ${region}, Colombia`;
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`;

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'MitologiaColombiana/1.0 (panteoncolombia@gmail.com)' }
    });
    const data = await res.json();

    if (data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      // Verificar que las coordenadas estén dentro de un rango razonable de Colombia
      if (lat > -5 && lat < 14 && lon > -82 && lon < -66) {
        console.log(`  ✅ Encontrado: ${lugar.nombre} → [${lat}, ${lon}]`);
        return [lat, lon];
      } else {
        console.warn(`  ⚠️ Coordenadas fuera de Colombia para "${lugar.nombre}". Usando plan B.`);
      }
    } else {
      console.warn(`  ⚠️ No se encontró "${lugar.nombre}". Usando plan B.`);
    }
  } catch (e) {
    console.error(`  ❌ Error geocodificando "${lugar.nombre}": ${e.message}`);
  }

  // Plan B: coordenadas de la región
  const coordsRegionales = COORDENADAS_POR_REGION[region] || [4.5, -73.0];
  console.log(`  📍 Plan B para "${lugar.nombre}": región ${region} → [${coordsRegionales[0]}, ${coordsRegionales[1]}]`);
  return coordsRegionales;
}

// ----------------------------------------------------------------------
// PROGRAMA PRINCIPAL
// ----------------------------------------------------------------------
(async () => {
  console.log('🔍 Iniciando geocodificación de lugares sagrados...\n');

  // Leer el archivo
  if (!fs.existsSync(ARCHIVO_LUGARES)) {
    console.error(`❌ No se encontró el archivo ${ARCHIVO_LUGARES}`);
    process.exit(1);
  }

  const lugares = JSON.parse(fs.readFileSync(ARCHIVO_LUGARES, 'utf-8'));
  let contadorNuevos = 0;
  let contadorExistentes = 0;

  for (const lugar of lugares) {
    // Solo procesar lugares que NO tengan coordenadas o estén vacías
    if (!lugar.coordenadas || !Array.isArray(lugar.coordenadas) || lugar.coordenadas.length !== 2) {
      console.log(`⏳ Buscando: ${lugar.nombre}...`);
      lugar.coordenadas = await geocode(lugar);
      contadorNuevos++;
      // Pausa obligatoria para respetar la política de Nominatim (1 petición/segundo)
      await new Promise(resolve => setTimeout(resolve, 1500));
    } else {
      contadorExistentes++;
    }
  }

  // Guardar el archivo actualizado
  fs.writeFileSync(ARCHIVO_LUGARES, JSON.stringify(lugares, null, 2), 'utf-8');
  console.log(`\n✨ Listo. Se añadieron coordenadas a ${contadorNuevos} lugares.`);
  console.log(`   Ya tenían coordenadas: ${contadorExistentes}.`);
  console.log(`   Archivo actualizado: ${ARCHIVO_LUGARES}`);
})();