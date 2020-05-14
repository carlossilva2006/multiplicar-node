const argv = require('./config/yargs').argv;//esto es para extraer solo lo que necesito del require
const colors = require('colors');            

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando) {
      case 'listar':
        console.log('Listar');
        listarTabla(argv.base,argv.limite);
        break;

      case 'crear':
        crearArchivo(argv.base,argv.limite)
          .then(archivo => console.log(`Archivo creado: ${ archivo.blue }`))
          .catch(err => console.log(err));
        console.log('Crear');
        break;
          
      default:
        console.log('Comando no reconocido');

}

// let base = 'abc';
    
    //  let argv2 = process.argv;
    //  console.log(argv.base);
    //  console.log('Limite',argv.limite);
     
    // let parametro = argv[2];
    // let base = parametro.split('=')[1] //split lo separara en forma de arreglo pero con ese simbolo 
    //                                    // dejando solo la posicion 1 del dicho arreglo


  // crearArchivo(base)
  //   .then(archivo => console.log(`Archivo creado: ${ archivo }`))
  //   .catch(err => console.log(err));


  //2*1=2
  //2*2=4  //hasta el 10
  //2*3=6
  //2*4=8
  //2*10=20