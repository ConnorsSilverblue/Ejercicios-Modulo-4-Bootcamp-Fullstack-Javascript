
let peliculasGuardadas = null;


async function obtenerPeliculas() {
    
    if (peliculasGuardadas === null) {
        console.log("📡 Yendo a internet a buscar los datos..."); 
        
        try {
            const respuesta = await fetch('https://ghibliapi.vercel.app/films');
            peliculasGuardadas = await respuesta.json();
            console.log("✅ Datos guardados correctamente.");
            
        } catch (error) {
            console.error("¡Ups! Algo falló al traer las películas", error);
        }
    } else {
        console.log("💾 Usando datos guardados en local (No gastamos internet)");
    }

    return peliculasGuardadas;
}


async function verTitulosYDirectores() {
    const peliculas = await obtenerPeliculas(); 
    
    console.log("--- LISTA DE TÍTULOS Y DIRECTORES ---");
    peliculas.forEach(peli => {
        console.log(`Película: ${peli.title} | Director: ${peli.director}`);
    });
}

async function verTitulosYAnios() {
    const peliculas = await obtenerPeliculas();
    
    console.log("--- LISTA DE AÑOS ---");
    peliculas.forEach(peli => {
        console.log(`${peli.title} (${peli.release_date})`);
    });
}

async function verTitulosYDescripcion() {
    const peliculas = await obtenerPeliculas();
    
    console.log("--- DESCRIPCIONES ---");
    peliculas.forEach(peli => {
        console.log(`Titulo: ${peli.title}`);
        console.log(`Descripción: ${peli.description}`);
        console.log("-------------------");
    });
}

async function verIds() {
    const peliculas = await obtenerPeliculas();
    
    console.log("--- IDs ---");
    peliculas.forEach(peli => {
        console.log(`ID: ${peli.id} - ${peli.title}`);
    });
}