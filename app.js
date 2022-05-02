

const {argv } = require("yargs").argv;
const {crearArchivo} = require(`./helpers/multiplicar`)


console.clear();
//console.log(process.argv)
console.log(argv)
//console.log(`la base de yargs es ${argv.mul}`)

const [,,arg3='mul = 5'] = process.argv
const[,mul]=arg3.split('=');
console.log(mul)

crearArchivo(mul).then(nomarchivo=>{console.log(nomarchivo, 'creado')})
.catch(err=>console.log(err));
 
 

/*const argv = require(`yargs`)
.options('b',{
    alias:'mul',
    type:'number',
    demandOption:true       
})
.check( (argv,options)=>{
    if( isNaN( argv.b )){
        throw `el multiplo tiene que ser un numero`;
    }
    return true;
})
.argv; */