import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interfaces/pet';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PetsService } from 'src/app/services/pets.service';

// const ListPets: Pet[] = [
//   {name: "Vayron", age: 5, race: "Pit bull", color: "grey", weight: 40.50},
//   {name: "Ori", age: 1, race: "tigger", color: "orange", weight: 8.30},
//   {name: "Ori", age: 1, race: "tigger", color: "orange", weight: 8.30},
//   {name: "Ori", age: 1, race: "tigger", color: "orange", weight: 8.30},
//   {name: "Ori", age: 1, race: "tigger", color: "orange", weight: 8.30},
//   {name: "Ori", age: 1, race: "tigger", color: "orange", weight: 8.30},
//   {name: "Ori", age: 1, race: "tigger", color: "orange", weight: 8.30},
//   {name: "Ori", age: 1, race: "tigger", color: "orange", weight: 8.30},
//   {name: "Ori", age: 1, race: "tigger", color: "orange", weight: 8.30}
// ];


@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['name', 'age', 'race', 'color', 'weight', 'actions'];
  //dataSource = new MatTableDataSource<Pet>(ListPets);
  dataSource = new MatTableDataSource<Pet>();
  //dataSource = ListPets;
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator; // el operador "!" indica que la variable no es nula
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private snackBar: MatSnackBar, private _petService: PetsService){}

  ngOnInit(): void {
    this.getPets();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = "Pets per page";
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePet(id: number){
    this.loading = true;
    this._petService.deletePet(id).subscribe(() =>{
      this.mesageDeletedSucces();
      this.loading = false
      this.getPets();
    })
     
  }

  getPets(){
    this._petService.getPets().subscribe(data => {
      this.dataSource.data = data;
    }, error => {
      alert("Ups there was a error...")
    })
  }

  mesageDeletedSucces(){
    setTimeout(() => {
      this.snackBar.open('the Pet has been deleted from the list', '', {
        duration: 3000,
        horizontalPosition:'center'
      });
    });
  }

  
}
