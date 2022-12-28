import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisicionesComponent } from './core/components/requisiciones/requisiciones.component';
import { PlantasComponent } from './core/components/plantas/plantas.component';

const routes: Routes = [
  { path: 'requisiciones', component: RequisicionesComponent },
  { path: 'plantas', component: PlantasComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
