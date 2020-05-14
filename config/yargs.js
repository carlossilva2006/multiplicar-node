const optimizacion = {          //tendra la configuracion de la base y limite
    base:{
        demand:true,
        alias: 'b'
      },
      limite:{
        alias:'l',
        default:10
      }

}

// lo mismo de abajo ahora optimizandolo y ahora poder utilizarlo fuera de este archivo debo exportarlo

const argv = require('yargs')
      .command('listar', 'Imprime en la consola la tabla de multiplicar',optimizacion)
      .command('crear', 'Genera un archivo con la tabla de multiplicar',optimizacion)
      .help()
      .argv;  



module.exports = {
    argv
}


/***
 * const argv = require('yargs')
             .command('listar',' Imprime en consola la tabla de multiplicar',optimizacion)  
            
             //   base:{
             //     demand:true,
             //     alias: 'b'
             //   },
             //   limite:{
             //     alias:'l',
             //     default:10
             //   }
             // })
             .command('crear',' Genera un archivo con la tabla de multiplicar',optimizacion)
             // ,{
             //   base:{
             //     demand:true,
             //     alias: 'b'
             //   },
             //   limite:{
             //     alias:'l',
             //     default:10
          //   }
             // })

             .help()
              .argv; 
 * 
 * */