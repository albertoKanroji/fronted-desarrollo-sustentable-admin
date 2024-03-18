export interface Tags {
    success: boolean;
    status:  number;
    message: string;
    data:    Datum[];
}

export interface Datum_t {
    id:         number;
    nombreTag:  string;
    created_at: null;
    updated_at: null;
}
