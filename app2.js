



const empleados =
[
    {id: 1,
    nombre:`a`
    },
    {id: 2,
    nombre:`b`
    },
    {id: 3,
    nombre:`c`
    }
]

const salarios =
[
    {id: 1,
    sueldo:`1000    `
    },
    {id: 2,
    sueldo:`1500`
    },
    {id: 3,
    sueldo:`2000`
    }   
]
const getEmpleado=(id)=>{
    return new Promise((evenPro,eventErr)=>{
        const empleado =  empleados.find(e=>e.id===id)?.nombre;
    (empleado)
        ? evenPro(empleado)
        : eventErr(`el empleado ${id} no existe`)
    
    })
}
const getSalario=(id)=>{
    return new Promise((resolve,reject)=>{
        const salario = salarios.find(s=>s.id===id)?.sueldo;
        (salario)
            ? resolve(salario)
            : reject(`No se encontro el usuario con el id ${id}`)
    })
}


const id=4;
let nombre;


const getinfoEmpleado=async()=>{
try {
    const empleado = await getEmpleado(id) 
    const salario  = await getSalario(id)
    return `el empleado ${empleado} tiene un salario de ${salario}`;
} catch (error) {
    throw error//console.log(error)
}
}

getinfoEmpleado(id).then(msj =>console.log(msj))
            .catch(err=>{console.log(err)})

/*
const id=2;
getEmpleado(id).then(empleado => console.log(empleado))
.catch(err=>console.log(`no existe el empleado con el id ${id}`))

 */




