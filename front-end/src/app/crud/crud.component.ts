import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  StudentArray:any[]=[];

  name: string="";
  address:string="";
  fee:Number=0;

  currentStudentID="";
}
