import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor( private http:HttpClient) { }

  getall()
  {
    return this.http.get<Fruit[]>('http://localhost:3000/fruits');
  }

  create(data:Fruit)
  {
    return this.http.post("http://localhost:3000/fruits",data);
  }

  edit(id:number)
  {
    return this.http.get<Fruit>(`http://localhost:3000/fruits/${id}`);
  }

  update(data:Fruit)
  {
    return this.http.put<Fruit>(`http://localhost:3000/fruits/${data.id}`,data);
  }

  delete(id:number)
  {
    return this.http.delete<Fruit>(`http://localhost:3000/fruits/${id}`);
  }
}
