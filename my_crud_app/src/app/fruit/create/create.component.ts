import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor( private service:FruitService, private route:Router){}

  formdata : Fruit ={
    id: 0,
    name: '',
    quantity: 0,
    price: 0
  }

  create()
  {
    this.service.create(this.formdata).subscribe({
      next:(data)=>{
        this.route.navigate(["/fruit/home"])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
