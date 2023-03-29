import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/interfaces/pet';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pets-card',
  templateUrl: './pets-card.component.html',
  styleUrls: ['./pets-card.component.css']
})
export class PetsCardComponent {

  id: number;
  pet!: Pet;
  loading: boolean = false;

  constructor(private _petService: PetsService, private aRoute: ActivatedRoute){
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void { 
    // this.aRoute.params.subscribe(data =>{  // --> otra forma de obtener el ID
    //   this.id = data['id']
    // })
    this.getPetDetail()
  }

  getPetDetail(){
    this.loading = true
    this._petService.getPetDetail(this.id).subscribe(data =>{
      this.pet = data;
      this.loading = false
    })
  }
}
