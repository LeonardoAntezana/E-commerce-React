// FUNCION PARA VALIDAR DATOS
export const validarDatos = (nombre, email, emailConfirm, direccion, fn) => {
    if(nombre !== '' && email !== '' && direccion !== '' && emailConfirm !== '' && email === emailConfirm){
        fn(nombre, email, direccion)   
    }
}