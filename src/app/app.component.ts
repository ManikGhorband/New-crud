import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomService } from './custom.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'crudapp';
//   itemForm: any;
//   employee:any
//   constructor(private fb: FormBuilder,private service:CustomService){
//     this.itemForm = this.fb.group({
//       id: [null],
//       name: ['', Validators.required],
//       lastname: [''],
//     });
//   }

//   onSubmit(){
// this.service.Adddata(this.itemForm.value).subscribe((res)=>{
//   this.employee=res
//   console.log(this.employee)
// })
//   }





}
