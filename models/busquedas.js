const axios = require('axios');

class Busquedas {

    historial = ['']

    constructor() {
        // TODO leer DB si existe
    }

    async ciudad( lugar = '' ) {
        // Peticion http
        // console.log('Ciudad: ', lugar );

        try {

            const resp = await axios.get('');

            return [];
            
        } catch( error ) {
            return [];
        }

        return []; // retornar los lugares
    }
}




module.exports = Busquedas;