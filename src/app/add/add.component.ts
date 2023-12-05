import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomService } from '../custom.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title = 'crudapp';
  itemForm: any;
  employee:any
  constructor(private fb: FormBuilder,private service:CustomService){
    this.itemForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      email: [''],
      address: [''],
      phone: [''],

    });
  }

  onSubmit(){
this.service.Adddata(this.itemForm.value).subscribe((res)=>{
  this.employee=res
  console.log(this.employee)
})

if(this.itemForm.valid){
  
}
  }

}
