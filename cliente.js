export 
class Cliente
{
    nombreCliente;
    dniCliente;
    rfCliente;
    #clave;

    constructor (nombreCliente , dniCliente , rfCliente){
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rfCliente = rfCliente
        this.#clave =' ';
    }
    asignarClave(clave){
        this.#clave = clave;
    }
    
    autenticable(clave){
        return true
    }
}