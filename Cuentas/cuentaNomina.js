import{Cuenta} from './Cuenta.js'
export 
class cuentaNomina extends Cuenta{
    
        static cantidadCuentas = 0;
        
            constructor(cliente,numero,agencia){
                super(cliente,numero,agencia);
                cuentaNomina.cantidadCuentas++;
            
            }

            retiroEnCuenta(valor= 0){ 

                super._retiroEnCuenta(valor,1);
            };
        
}