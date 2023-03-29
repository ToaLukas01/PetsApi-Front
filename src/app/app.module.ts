import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// COMPONETS
import { AddEditPetsComponent } from './components/add-edit-pets/add-edit-pets.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { ViewPetsComponent } from './components/view-pets/view-pets.component';
import { PetsCardComponent } from './components/pets-card/pets-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SpinerBarComponent } from './components/spiner-bar/spiner-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    AddEditPetsComponent,
    PetsListComponent,
    ViewPetsComponent,
    PetsCardComponent,
    SpinerBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
