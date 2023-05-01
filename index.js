const Busquedas = require("./models/busquedas");

const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");





const main = async () => {
    
    const busquedas = new Busquedas();

    let opt;

    do {

        opt =  await inquirerMenu();
        // console.log({ opt });
        
        switch ( opt ) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ingrese ciudad a buscar: ');
                await busquedas.ciudad( lugar );
                // buscar los lugares


                // Seleccionar el lugar 

                // Datos del clima 

                // Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Mínima:', );
                console.log('Máxima:', );
                break;
        
            default:
                break;
        }


        if ( opt !==0 ) await pausa();

    } while( opt !== 0 ) 

    

}



main();