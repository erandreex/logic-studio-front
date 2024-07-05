import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ReservasComponent } from './pages/reservas/reservas.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
    },
    {
        path: 'crear',
        component: CrearComponent,
    },
    {
        path: 'reservas/:placa',
        component: ReservasComponent,
    },
];
