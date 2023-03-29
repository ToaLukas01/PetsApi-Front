import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pet } from 'src/app/interfaces/pet';
import { PetsService } from 'src/app/services/pets.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-edit-pets',
  templateUrl: './add-edit-pets.component.html',
  styleUrls: ['./add-edit-pets.component.css']
})
export class AddEditPetsComponent {

  loading: boolean = false;
  form: FormGroup;
  id: number;
  title!: string

  // a travez de inyecccion de dependencia inyectamos una clase que nos ayude con el formulario reactivo
  constructor(private fb: FormBuilder, private _petService: PetsService,
    private aRoute: ActivatedRoute, private router: Router,
    private snackBar: MatSnackBar){
    this.form = this.fb.group({
      name: ["", Validators.required],
      age: ["", Validators.required],
      race: ["", Validators.required],
      color: ["", Validators.required],
      weight: ["", Validators.required],
      description: [""]
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id != 0) {
      this.title = "Edit"
      this.getPetDetails(this.id);
    } else {
      this.title = "Add new"
    }
  }

  addEditPet(){
    const pet: Pet = {
      name: this.form.value.name,
      age: this.form.value.age,
      race: this.form.value.race,
      color: this.form.value.color,
      weight: this.form.value.weight,
      description: this.form.value.description
    }
    if(this.id != 0) {
      pet.id = this.id
      this.updatePet(this.id, pet);
    } else {
      this.postPet(pet);
    }
  }

  getPetDetails(id: number){
    this.loading = true
    this._petService.getPetDetail(id).subscribe(data =>{
      this.form.patchValue({ // con este metodo "macheamos" las propiedades de los datos traidos por la peticion http
        name: data.name,
        age: data.age,
        race: data.race,
        color: data.color,
        weight: data.weight,
        description: data.description
      })
      this.loading = false
    })
  }

  postPet(pet: Pet){
    this.loading = true
    this._petService.postPet(pet).subscribe(data =>{
      this.loading = false
      this.mesageAddPetSucces();
      this.router.navigate(['/petslist'])
    })
  }

  mesageAddPetSucces(){
    setTimeout(() => {
      this.snackBar.open('the Pet has been added in the list', '', {
        duration: 4000,
        horizontalPosition:'center'
      });
    });
  }

  updatePet(id: number, pet: Pet){
    this.loading = true
    this._petService.updatePet(id, pet).subscribe(() =>{
      this.loading = false
      this.mesageUpdateSucces();
      this.router.navigate(['/petslist'])
    })
  }

  mesageUpdateSucces(){
    setTimeout(() => {
      this.snackBar.open('the Pet has been updated succesfully', '', {
        duration: 4000,
        horizontalPosition:'center'
      });
    });
  }
}
