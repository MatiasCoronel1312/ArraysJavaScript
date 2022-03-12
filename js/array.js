class Prestamo {
    constructor(nombre, apellido, prestamoNeto, cuotas) {
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.prestamoNeto = parseFloat(prestamoNeto);
        this.cuotas = parseInt(cuotas);
    }

    InteresBanco() {
        
        if (this.cuotas <= 3) {
           interes = 1.5;
        } else if ((this.cuotas > 3) && (this.cuotas <= 6)){
            interes = 2;
        } else if ((this.cuotas > 6) && (this.cuotas <= 9)){
            interes = 2.5;
        } else{
            interes = 3;
        }
        this.totalAPagar = this.prestamoNeto * interes;
    }
}
//Declaramos un array de productos para almacenar objetos
const prestamos = [];
prestamos.push(new Prestamo("matias", "coronel","300000",12));
prestamos.push(new Prestamo("martin", "perez","25000",6));
prestamos.push(new Prestamo("marcos", "lozada","120000",12));
prestamos.push(new Prestamo("alicia", "rivero","75000",9));
prestamos.push(new Prestamo("laura", "gomez","9000",3));
//Iteramos el array con for...of para modificarlos a todos

for (const prestamo of prestamos){
    prestamo.InteresBanco();
}
    
for (let cliente=0;cliente<5;cliente++){
    console.log(prestamos[cliente]);
    
}
   

    
