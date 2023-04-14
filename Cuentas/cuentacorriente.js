import {Cuenta} from "./Cuenta.js"
export 
class cuentaCorriente extends
Cuenta
{
static cantidadCuentas = 0;

    constructor(cliente,numero,agencia){
        super(cliente,numero,agencia);
        cuentaCorriente.cantidadCuentas++;
    
    }
    retiroEnCuenta(valor= 0){ 

        super._retiroEnCuenta(valor,5);
    };
    prueba(){
        super.prueba();
        console.log('metodo hijo')
    }
}
