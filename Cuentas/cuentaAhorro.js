import { Cuenta } from "./Cuenta.js";

export
class CuentaAhorro extends Cuenta{
    static cantidadCuentas = 0;

    constructor(cliente,numero,agencia,saldo){

        super(cliente,numero,agencia,saldo);
        CuentaAhorro.cantidadCuentas++;
    
    }

    
    retiroEnCuenta(valor= 0){ 
        super._retiroEnCuenta(valor,2);

}
}