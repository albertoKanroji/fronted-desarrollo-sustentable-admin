export interface UsuariosClientes {
    success: boolean;
    status:  number;
    message: string;
    data:    Datum[];
}

export interface Datum {
    id:                     number;
    nombreCliente:          string;
    usuarioApellidoPaterno: string;
    usuarioApellidoMaterno: string;
    usuarioEmail:           string;
}
