import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisicionesComponent } from './core/components/requisiciones/requisiciones.component';
import { PlantasComponent } from './core/components/plantas/plantas.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
