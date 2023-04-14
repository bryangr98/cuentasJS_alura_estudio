import { cuentaCorriente } from "./Cuentas/cuentacorriente.js";
import { Cliente } from './cliente.js';
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";


const cliente = new Cliente ('Ricardo' , '001' , '01');
const cuentaRicardo = new cuentaCorriente(cliente ,'001', '01');
cliente.asignarClave('345432');
console.log(SistemaAutenticacion.login(cliente,'345432'))
const empleado = new Empleado('Juan', '123456',10000);
empleado.asignarClave('12345')
const empleadoGer = new Gerente('Gael',"234589",12000);
empleadoGer.asignarClave('54321')
const empleadoDir = new Director('Joel' , '369147',15000);

console.log(empleado.verBonificacion())
console.log(empleadoGer.verBonificacion())
console.log(empleadoDir.verBonificacion())

console.log(SistemaAutenticacion.login(empleado,'12345'))
console.log(SistemaAutenticacion.login(empleadoGer,'12345'))
