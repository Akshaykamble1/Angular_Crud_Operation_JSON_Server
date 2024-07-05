import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
constructor( private service:FruitService,private router:Router,private route:ActivatedRoute){}

formdata : Fruit ={
  id: 0,
  name: '',
  quantity: 0,
  price: 0
}

ngOnInit(): void {
  this.route.paramMap.subscribe((para)=>{
    let id= Number(para.get('id'))
    this.getById(id)
  })
}
getById(id:number){
this.service.edit(id).subscribe((data)=>{
this.formdata=data;
} )
 }

 update()
 {
  this.service.update(this.formdata).subscribe({
    next:(data)=>{
      this.router.navigate(["/fruit/home"])
    },
    error:(err)=>{
      console.log(err)
    }
  })
 }
}
