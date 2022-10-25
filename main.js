//USUARIO
class Usuario{
    constructor (nombreCompleto, edad, obraSocial, mail, telefono, contraseña) {
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
        this.obraSocial = obraSocial;
        this.mail = mail;
        this.telefono = telefono;
        this.contraseña = contraseña;        
    } 
}

//TURNO
class Turno{
    constructor (nombreCompleto, medico, fecha, consulta) {
        this.nombreCompleto = nombreCompleto;
        this.medico = medico;
        this.fecha = fecha;
        this.consulta = consulta;
    }
}  

//MEDICOS
class Medico{
    constructor (nombreCompleto, especialidad) {
        this.nombreCompleto = nombreCompleto;
        this.especialidad = especialidad;        
    } 
}

//SACAR TURNO
function sarcarTurno(){
    let reservarTurno = prompt("Desea reservar un turno?")
    if (reservarTurno == "si"){

        let nombreCompleto = prompt("nombreCompleto");
        let fecha = prompt("Fecha");
        let medico = prompt("medico");
        let consulta = prompt("consulta");

        const turno = new Turno(nombreCompleto, fecha, medico, consulta)
        console.log(turno);
        return turno; 

    } else {
        console.log("Turno anulado");
    }
}

//CREAR CONTRASEÑA Y VALIDARLA
function crearContrasenia(){
    let contraseña = prompt("Ingresar contraseña");
    let confimContrasenia = prompt("Confirme su contraseña");
    if (contraseña == confimContrasenia){
        alert("Contraseña creada exitosamente");
        return contraseña; 
        } else {
        alert("Las contraseñas con coinciden, intentelo nuevamente");
        crearContrasenia()
                }
    } 

//CREAR USUARIO CON CONTRASEÑA VALIDADA
function crearUsuario(){
    let nombre = prompt("Nombre y apellido");
    let edad = parseInt(prompt("Ingrese su edad"));
    let obraSocial = prompt("Ingrese su obra social");
    let mail = prompt("Ingrese su mail");
    let telefono = parseInt(prompt("Numero de telefono"));
    let contraseña = crearContrasenia();

    
    const usuario = new Usuario(nombre, edad, obraSocial, mail, telefono, contraseña);
    console.log(usuario);
    return usuario;
   
}


const Valentin = new Usuario("Valentin Alaminos", 24, "ASPURC", "alaminos41@gmail.com", 3584324083, "alaminos123");
const Alvaro = new Usuario("Alavaro Cerutti", 23, "ASPURC", "alvicerutti@hotmail.com", 3584324084, "alvaro123");
const Florencia = new Usuario("Florencia", 50, "OSPECOR", "flortuta@gmail.com", 35843085, "florencia12345");



const Luis = new Medico("Luis Gero", "Ginecologo");
const Mauricio = new Medico("Mauricio Lente", "Pediatra");
const Silvia = new Medico("Silvia Ochoa", "Clinica");





for (let propiedad in Luis){
    console.log(`El medico ${Luis.nombreCompleto} es ${Luis.especialidad}`)

} 



console.log(Luis.nombreCompleto)










//CONSULTAR MEDICOS










