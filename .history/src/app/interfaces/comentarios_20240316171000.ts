export interface Comentarios {
    success: boolean;
    status:  number;
    message: string;
    data:    Datum[];
}

export interface Datum {
    id:         number;
    comentario: string;
    created_at: Date;
    updated_at: Date;
    detalles:   Detalle[];
}

export interface Detalle {
    id:                  number;
    created_at:          Date;
    updated_at:          Date;
    comentarios_id:      number;
    usuariosClientes_id: number;
    publicacion_id:      number;
}
