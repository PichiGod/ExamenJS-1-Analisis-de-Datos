/* 3- Haga un programa que lea N tarjetas de datos A, B, C, D, E
A = Número de cedula de identidad del alumno 
B = Nombre del alumno 
C = Nota de matemáticas
D = Nota de física
E = Nota de programación
Hallar:
- Nota promedio de cada materia
- Número de alumnos aprobados en cada materia 
- Número de alumnos aplazados en cada materia
- Número de alumnos que aprobaron todas las materias 
- Número de alumnos que aprobaron una sola materia 
- Número de alumnos que aprobaron dos materias 
- Nota máxima en cada materia
*/

document.getElementById('body').innerHTML += `<h1>Ejercicio de Analisis de Datos</h1>
<h3>- Realizado por José Duarte</h3>   
<h4>Iniciar la actividad</h4>
<button onclick="proceso()">Iniciar</button>`;

//Declaracion de las variables correspondientes
var a = [50];
var b = [50];
var c = 0;
var d = 0;
var e = 0;

let c_n = [100]; 
let d_n = [100];
let e_n = [100];

var promedioC = 0;
var promedioD = 0;
var promedioE = 0;

var sumaC = 0, sumaD = 0,sumaE = 0;

var aprobadosC = 0;
var aprobadosD = 0;
var aprobadosE = 0;

var aplazadosE = 0;
var aplazadosC = 0;
var aplazadosD = 0;

var todasmaterias = 0;
var unamateria = 0;
var dosmateria = 0;

var notaMaxC = 0;
var notaMaxD = 0;
var notaMaxE = 0;
var i = 0;

function proceso() {
    do {
        cantidad = prompt("USUARIO, DIGITE LA CANTIDAD DE TARJETAS: ");
        cantidad = parseInt(cantidad)
    } while (isNaN(cantidad));
    
    if (cantidad <= 0){
        document.getElementById('resp').innerHTML = `
            <h3>ERROR: La cantidad ingresada es invalida</h3>`; 
        // console.log("Yo estoy activo");
    }else{
        for(i = 0; i < cantidad; i++){
            a[i] = prompt("ESCRIBA EL NOMBRE DEL ALUMNO");
            b[i] = parseInt(prompt("ESCRIBA SU NUMERO DE CEDULA"));
            c_n[i] = parseInt(prompt("NOTA DE MATEMATICAS"));
            c_n.push(c)
            d_n[i] = parseInt(prompt("NOTA DE FISICA"));
            d_n.push(d)
            e_n[i] = parseInt(prompt("NOTA DE PROGRAMACION"));
            e_n.push(e)
        
            //Calculo del promedio de la materia a traves del método estático Math.floor()
            sumaC = sumaC + Math.floor(c_n[i]);
            sumaD = sumaD + Math.floor(d_n[i]);
            sumaE = sumaE + Math.floor(e_n[i]);
            
            for(var j = 0;j<cantidad;j++){
                
                //Uso de la sentencia if y else para determinar los alumnos aprobados y aplazados
                if(c_n[j] >= 10 && c_n[j] <=20){
                    aprobadosC = aprobadosC +1;
                }
                else {(c_n[j] < 10)
                    aplazadosC = aplazadosC+1;
                }
        
                if(d_n[j] >= 10 && d_n[j] <=20){
                    aprobadosD = aprobadosD +1;
                }
                else {(d_n[j] < 10)
                    aplazadosD = aplazadosD+1;
                }
        
                if(e_n[j] >= 10 && e_n[j] <=20){
                    aprobadosE = aprobadosE +1;
                }
                else {(e_n[j] < 10)
                    aplazadosE = aplazadosE+1;
                }
                //Uso de la sentencia if para determinar los alumnos que aprobaron todas las materias 
                if(c_n[j] >=10 && d_n[j] >=10 && e_n[j] >=10){
                    todasmaterias = todasmaterias +1;
                }
            
                //Uso de la sentencia if para determinar los alumnos que aprobaron solo una materia
                if(c_n[j] >=10 && d_n[j] <10 && e_n[j] <10 ||
                    c_n[j] <10 && d_n[j] >= 10 && e_n[j] < 10 ||
                    c_n[j] <10 && d_n[j] <10 && e_n[j] >=10){
                    unamateria = unamateria + 1; 
                }
                //Uso de la sentencia if para determinar los alumnos que aprobaron solo dos materias 
                if(c_n[j] >=10 && d_n[j] >=10 && e_n[j] <10 ||
                    c_n[j] >=10 && d_n[j] < 10 && e_n[j] >= 10 ||
                    c_n[j] <10 && d_n[j] >=10 && e_n[j] >=10){
                    dosmateria = dosmateria + 1; 
                }
                //Uso de la sentencia if para determinar la nota maxima en cada materia
                if(j==0){
                    notaMaxC = c_n[j];
                    notaMaxD = d_n[j];
                    notaMaxE = e_n[j];
                }
                if(j > 0){
                    if (c_n > notaMaxC){
                        notaMaxC = c_n[j];
                    }
                    if(d_n > notaMaxD) {
                        notaMaxD = d_n[j];
                    }
                    if (c_n > notaMaxC){
                        notaMaxC = c_n[j];
                    }
                    if(e_n > notaMaxE) {
                        notaMaxE = e_n[j];
                    }
                }
            }
             
        }

        promedioC = (sumaC) / cantidad;
        promedioD = (sumaD) / cantidad;
        promedioE = (sumaE) / cantidad;

        //Imprimimos todos los valores requeridos en pantalla a taves del document.write con su respectiva asigancion de variables

        document.getElementById('resp').innerHTML = `
            <h1>El resultado de los datos ingresados es el siguiente: </h1>
            <p> - El promedio de la seccion de Matematicas es: </p> `+ promedioC + `
            <p> - El promedio de la seccion de fisica: </p>` + promedioD + `
            <p> - El promedio de la seccion de Programacion: </p>` + promedioE + `<hr />

            <p> - Numero de alumnos aprobados en matematicas: </p>` + aprobadosC + `
            <p> - Numero de alumnos aprobados en fisica: </p>` + aprobadosD + `
            <p> - Numero de alumnos aprobados en Programacion: </p>` + aprobadosE +`<hr />
            
            <p> - Alumnos que aprobaron todas las materias: </p>` + todasmaterias +`
            <p> - Solo una materia: </p> `+ unamateria + `
            <p> - Solo dos materias: </p>` + dosmateria + `<hr />

            <p> - Nota maxima en matematica: </p>` + notaMaxC + `
            <p> - Nota maxima en fisica: </p>` + notaMaxD + `
            <p> - Nota maxima en Programacion: </p> ` + notaMaxE + `
            
        `
        
    }

}