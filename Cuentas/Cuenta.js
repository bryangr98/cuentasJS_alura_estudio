export
class Cuenta {
    #saldo;
    #cliente;

    static cantidadCuentas = 0;

    set cliente(valor) {
        if (valor instanceof Cliente)
        this.#cliente = valor ;
    }
    
    get cliente(){
        return this.#cliente
    }

    constructor (cliente,numero,agencias,saldo){
        
        if(this.constructor == Cuenta){
            throw new Error("No se debe acceder a los objetos de la clase cuenta")
        }
        this.numero = numero;
        this.agencias = agencias;
        this.#cliente = cliente;
        this.#saldo = saldo=0;
    
}
    depositoEnCuenta(valor) {
        if (valor > 0)
        this.#saldo += valor;
        return this.#saldo;
    };

    retiroEnCuenta(valor){
        this._retiroEnCuenta(valor, 0);
    };
    
    _retiroEnCuenta(valor, comision){ 
        valor = valor *(1+ comision/100) ;
        if ( valor <= this.#saldo )
        this.#saldo -= valor;
        return this.#saldo
    };

    verSaldo () {
        return this.#saldo;
    };

    transferencia(valor,cuentaDestino) {
        if( valor <= this.#saldo){
        this.retiroEnCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        }
    }
    prueba() { 
        console.log('Metodo Padre')
    }

}