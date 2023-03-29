import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviorment } from 'src/enviorments/enviorment';
import { Pet } from '../interfaces/pet';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private myAppUrl: string = enviorment.endpoint;
  private myApiUrl: string = "api/Pets/";

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this.myAppUrl + this.myApiUrl);
  }

  getPetDetail(id: number): Observable<Pet>{
    return this.http.get<Pet>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deletePet(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  postPet(pet: Pet): Observable<Pet>{
    return this.http.post<Pet>(`${this.myAppUrl}${this.myApiUrl}`, pet);
  }

  updatePet(id: number, pet: Pet): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, pet);
  }
}
 