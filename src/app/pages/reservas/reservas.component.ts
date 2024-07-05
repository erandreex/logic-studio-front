import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { AutosService } from '../../services/autos.service';
import { DataAutoHistorial, Historial } from '../../models/ModelAutos';

@Component({
    selector: 'app-reservas',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './reservas.component.html',
    styleUrl: './reservas.component.css',
})
export class ReservasComponent {
    public placa: string = '';
    public lista: Historial[] = [];

    constructor(private autosservice: AutosService, private route: ActivatedRoute) {}
    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.placa = params.get('placa')!;
            this.obtenerReservasPorPlaca(this.placa);
        });
    }

    obtenerReservasPorPlaca(placa: string) {
        this.autosservice.obtenerReservasPlaca(placa).subscribe((resp) => {
            this.lista = resp.data.Historial;
        });
    }
}
