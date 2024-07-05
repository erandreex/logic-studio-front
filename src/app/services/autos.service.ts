import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelResponse } from '../models/ModelResponse';
import { catchError, map, Observable, of } from 'rxjs';
import {
    DataAutoCalendario,
    DataAutoHistorial,
    DataAutoListaPlaca,
    ModelAutoLista,
    RegistroReserva,
} from '../models/ModelAutos';

@Injectable({
    providedIn: 'root',
})
export class AutosService {
    private baseUrl: string = 'http://172.30.3.228:8081/autos';

    constructor(private http: HttpClient) {}

    obtenerListaPlacas(): Observable<ModelResponse<DataAutoListaPlaca>> {
        const url = `${this.baseUrl}/lista`;

        return this.http.get<ModelResponse<DataAutoListaPlaca>>(url).pipe(
            map((resp) => resp),
            catchError((err) => of(err))
        );
    }

    obtenerReservasPlaca(placa: string): Observable<ModelResponse<DataAutoHistorial>> {
        const url = `${this.baseUrl}/historial/${placa}`;

        return this.http.get<ModelResponse<DataAutoHistorial>>(url).pipe(
            map((resp) => resp),
            catchError((err) => of(err))
        );
    }

    obtenerCalendario(): Observable<ModelResponse<DataAutoCalendario>> {
        const url = `${this.baseUrl}/calendario`;

        return this.http.get<ModelResponse<DataAutoCalendario>>(url).pipe(
            map((resp) => resp),
            catchError((err) => of(err))
        );
    }

    registrarReserva(body: RegistroReserva): Observable<ModelResponse<RegistroReserva>> {
        const url = `${this.baseUrl}/reserva`;

        return this.http.post<ModelResponse<null>>(url, body).pipe(
            map((resp) => resp),
            catchError((err) => of(err))
        );
    }
}
