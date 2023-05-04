require('dotenv').config();

const Busquedas = require("./models/busquedas");

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");





const main = async () => {
    
    const busquedas = new Busquedas();

    let opt;

    do {

        opt =  await inquirerMenu();
        // console.log({ opt });
        
        switch ( opt ) {
            case 1:
                // Mostrar mensaje
                const termino = await leerInput('Ingrese ciudad a buscar: ');
                
                // buscar los lugares
                const lugares = await busquedas.ciudad( termino );
               
                // Seleccionar el lugar 
                const id = await listarLugares( lugares ); 
                if ( id === '0' ) continue;

               

                // console.log({ id });
                const lugarSel = lugares.find(l => l.id === id );

                // Guardar en DB
                busquedas.agregarHistorial( lugarSel.nombre );
                
                // console.log( lugarSel );
                
                // Datos del clima 
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

                // Mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.nombre );
                console.log('Lat:', lugarSel.lat );
                console.log('Lng:', lugarSel.lng );
                console.log('Como esta el clima:', clima.desc)
                console.log('Temperatura:', clima.temp);
                console.log('Mínima:', clima.min);
                console.log('Máxima:', clima.max);
                console.log('Humedad:', clima.humedad);
                console.log('Nivel del mar:', clima.nivel_mar);
            break;
            
            case 2:
                busquedas.historialCapitalizado.forEach( (lugar , i) => {
                    const idx = `${ i + 1 }`.green;
                    console.log( `${ idx } ${ lugar }`);
                })
            break;

            default:
                break;
        }


        if ( opt !==0 ) await pausa();

    } while( opt !== 0 ) 

    

}



main();