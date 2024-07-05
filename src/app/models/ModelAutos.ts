export interface ModelAutoLista {
    Placas: string[];
}

export interface ModelAutoLista {
    Placas: string[];
}

export interface DataAutoListaPlaca {
    Placas: string[];
}

export interface DataAutoCalendario {
    Calendario: string[];
}

export interface DataAutoHistorial {
    Historial: Historial[];
}

export interface Historial {
    placa: string;
    estado: string;
    cita: Date;
}

export interface RegistroReserva {
    placa: string;
    estado: string;
    cita: Date;
}
