// FUNCION PARA VALIDAR DATOS
export const validarDatos = (nombre, email, emailConfirm, direccion, fn) => {
    if(nombre.length >= 6 && email !== '' && direccion !== '' && emailConfirm !== '' && email === emailConfirm){
        fn(nombre, email, direccion)   
    }
}