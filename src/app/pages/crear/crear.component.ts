import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutosService } from '../../services/autos.service';
import { delay } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-crear',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, RouterModule],
    templateUrl: './crear.component.html',
    styleUrl: './crear.component.css',
})
export class CrearComponent {
    public calendario: string[] = [];
    public mensaje: string = '';

    constructor(private autosservice: AutosService, private fb: FormBuilder) {}

    public formReservas: FormGroup = this.fb.group({
        placa: ['', Validators.required],
        estado: ['', Validators.required],
        cita: ['', Validators.required],
    });

    ngOnInit(): void {
        this.obtenerListaPlaca();
    }

    obtenerListaPlaca() {
        this.autosservice.obtenerCalendario().subscribe((resp) => {
            this.calendario = resp.data.Calendario;
        });
    }

    crearReserva() {
        if (this.formReservas.invalid) {
            return;
        }

        this.autosservice
            .registrarReserva(this.formReservas.value)
            .pipe(delay(1000))
            .subscribe({
                next: (resp) => {
                    if (resp.ok) {
                        this.mensaje = 'Creado exitosamente!';
                    } else {
                        this.mensaje = 'Error interno, no se ha podido registrar!';
                        console.log('Error: ', resp);
                    }
                },
                error: (err) => console.log('Error: ', err),
                complete() {},
            });
    }
}
