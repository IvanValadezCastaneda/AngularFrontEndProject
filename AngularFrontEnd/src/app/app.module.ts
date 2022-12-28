import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialExampleModule } from 'src/material.module';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { SideNavComponent } from './core/components/side-nav/side-nav.component';
import { ToolbarComponent } from './core/components/header/toolbar/toolbar.component';
import { RequisicionesComponent } from './core/components/requisiciones/requisiciones.component';
import { PlantasComponent } from './core/components/plantas/plantas.component';
import { UserProfileComponent } from './core/components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideNavComponent,
    ToolbarComponent,
    RequisicionesComponent,
    PlantasComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialExampleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ToolbarComponent,
    SideNavComponent,
    PlantasComponent,
    RequisicionesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
