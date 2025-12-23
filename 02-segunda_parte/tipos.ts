var cuenta:number;
var cuentaString:string;
var cuentaBoolean:boolean;
var cuentaArr:string[];
var cuentaNum:number[];
var cuentaAny:any[];
var arregloBoolean:Array<boolean>;
enum colores {
    Rojo,
    Verde,
    Azul
}
var resultado:colores = colores.Verde;

console.log(resultado);

// arregloBoolean = new Array<boolean>();
// cuentaNum = new Array<number[]>();
// cuentaArr = new Array<string>();

arregloBoolean = [true, false, true, true];
cuentaNum = [1, 2, 3, 4, 5];
cuentaArr = ["uno", "dos", "tres"];
cuentaBoolean = true;
cuentaString = "dos";
cuenta = 2;
cuentaAny = [1, "dos", true, [], {}];

cuentaArr.push("cuatro");
cuentaNum.push(6);

cuentaArr[0] = "cero";
cuentaNum[0] = 0;

console.log(cuenta);
console.log(cuentaString);
console.log(cuentaBoolean);
console.log(cuentaArr);
console.log(cuentaNum);
console.log(cuentaAny);

var miRutaDeArchivo:string[]|string;
miRutaDeArchivo = "C:/Users/one/Documents";
console.log(miRutaDeArchivo);
miRutaDeArchivo = ["C:", "Users", "one", "Documents"];
console.log(miRutaDeArchivo);