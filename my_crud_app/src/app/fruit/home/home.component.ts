import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  allfruits : Fruit[] = [];
constructor( private service:FruitService){}

ngOnInit(): void {
  this.service.getall().subscribe((data)=>{
  this.allfruits=data;
  })
}

delete(id:number)
{
  this.service.delete(id).subscribe({
    next:(data)=>{
      this.allfruits = this.allfruits.filter(_ => _.id != id)
    }
  }
  )
}
}
