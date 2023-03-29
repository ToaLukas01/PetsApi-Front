import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTES
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { AddEditPetsComponent } from './components/add-edit-pets/add-edit-pets.component';
//import { ViewPetsComponent } from './components/view-pets/view-pets.component';
import { PetsCardComponent } from './components/pets-card/pets-card.component';

const routes: Routes = [
  // indico path:"en la ruta X", renderizo el componente:"componente X"
  { path: 'petslist', component: PetsListComponent }, 
  { path: 'addpet', component: AddEditPetsComponent },
  { path: 'petcard/:id', component: PetsCardComponent },
  { path: 'editpet/:id', component: AddEditPetsComponent },
  { path: '', redirectTo: 'petslist', pathMatch: 'full' }, // ESTA SERA LA RUTA QUE SE RENDERIZE PRO DEFECTO 
  { path: '**', redirectTo: 'petslist', pathMatch: 'full' } // aqui indicamos que si la ruta no corresponde a nada, rediriga por defecto a la ruta indicada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
