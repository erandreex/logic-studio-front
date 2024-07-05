import { Component } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-index',
    standalone: true,
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    templateUrl: './index.component.html',
    styleUrl: './index.component.css',
})
export class IndexComponent {
    constructor(private autosservice: AutosService, private fb: FormBuilder) {}

    public formBuscar: FormGroup = this.fb.group({
        placa: ['', Validators.required],
    });

    public placas: string[] = [];
    public placasTodos: string[] = [];

    ngOnInit(): void {
        this.obtenerListaPlaca();
    }

    obtenerListaPlaca() {
        this.autosservice.obtenerListaPlacas().subscribe((resp) => {
            this.placas = resp.data.Placas;
            this.placasTodos = resp.data.Placas;
        });
    }

    buscar() {
        let placa: string = this.formBuscar.get('placa')?.value;
        if (!placa) {
            return;
        }
        this.placas = this.placasTodos.filter((e) => e == placa);
    }

    limpiar() {
        this.placas = [...this.placasTodos];
        this.formBuscar.reset();
    }
}
