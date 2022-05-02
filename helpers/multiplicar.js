const { rejects } = require("assert");
const fs = require(`fs`);
const crearArchivo=async(mul =5)=>{
   

       try {
        let guard=``;
        for(let i=1; i <=10; i++){
        guard +=  `${mul} x  ${i} = ${mul * i}\n `;

        }
        console.log(guard);
        
        fs.writeFileSync(`./salida/tabla del ${mul}.txt` , guard);
       

        return`tabla del ${mul} .txt creado`;
       } catch (error) {
           throw error
       }
    

    
}
module.exports = {crearArchivo }

/**return new Promise((resolve,rejects)=>{ */