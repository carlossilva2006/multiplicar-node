//requireds
const fs = require('fs');
const colors = require('colors');            


let listarTabla = (base, limite = 10) => {

    console.log('=================='.blue);
    console.log(`=== tabla del ${ base }==`.blue);
    console.log('=================='.blue);

    for(let i = 1; i <= limite; i++){
        //el += es para concatenar todo lo que voy a guardar
        console.log(`==`.blue,`${ base } * ${i} = ${ base * i}`,'=='.blue);
    }
    console.log('==================='.blue);

}

crearArchivo = ( base, limite ) => {

    return new Promise( (resolve, reject)=>{

        if(!Number (base) ){
            reject(`el valor introcducido ${ base } no es un numero`);
            return;
        }

        let data = ' ';

        for(let i = 1; i<=limite;i++){
            //el += es para concatenar todo lo que voy a guardar
            data +=(`${ base } * ${i} = ${ base * i}\n `);
        }
        
        //escribir archivo nombre del archivo, contenido que quiero grabar y el callback
        fs.writeFile(`tabla/tabla-${base}-al-${ limite }.txt`, data, (err) => {
            //en el callback vamos a recibir el error
            if (err) 
                reject (err);
            else 
                resolve(`tabla-${ base }-al-${limite }.txt`)//el resolve esta envia el nombre del archivo al app
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}


