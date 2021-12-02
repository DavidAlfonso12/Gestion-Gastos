
export class DatoContable{
    _id?: number;
    nombre: string;
    valor: number;
    fecha: Date;

    constructor(nombre: string, valor: number, fecha: Date){
        this.nombre = nombre;
        this.fecha = fecha;
        this.valor = valor;
    }
}


