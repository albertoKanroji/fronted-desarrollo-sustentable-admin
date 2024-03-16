export interface Publicaciones {
    success: boolean;
    status:  number;
    message: string;
    data:    Datum[];
}

export interface Datum {
    id:                         number;
    titulo:                     string;
    subTitulo:                  string;
    descripcion:                string;
    created_at:                 Date;
    updated_at:                 Date;
    categoriasPublicaciones_id: number;
    categoria:                  Categoria;
    imagenes:                   any[];
    usuarios:                   Usuario[];
    tags:                       Tag[];
    comentarios:                Comentario[];
}

export interface Categoria {
    id:               number;
    nombreCategoria?: string;
    created_at:       Date | null;
    updated_at:       Date;
    comentario?:      string;
}

export interface Comentario {
    id:                  number;
    created_at:          Date;
    updated_at:          Date;
    comentarios_id:      number;
    usuariosClientes_id: number;
    publicacion_id:      number;
    comentario:          Categoria;
}

export interface Tag {
    id:         number;
    nombreTag:  string;
    created_at: null;
    updated_at: null;
    pivot:      TagPivot;
}

export interface TagPivot {
    publicaciones_id: number;
    tags_id:          number;
}

export interface Usuario {
    id:                number;
    name:              string;
    email:             string;
    email_verified_at: null;
    created_at:        null;
    updated_at:        null;
    pivot:             UsuarioPivot;
}

export interface UsuarioPivot {
    publicaciones_id: number;
    users_id:         number;
}
