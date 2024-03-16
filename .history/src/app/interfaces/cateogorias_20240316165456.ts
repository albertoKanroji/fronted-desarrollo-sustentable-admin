export interface Categorias {
    success: boolean;
    status:  number;
    message: string;
    data:    Datum[];
}

export interface Datum {
    id:              number;
    nombreCategoria: string;
    created_at:      null;
    updated_at:      Date;
}
