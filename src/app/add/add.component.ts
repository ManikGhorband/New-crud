import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomService } from '../custom.service';
import { Route, Router, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title = 'crudapp';
  itemForm: any;
  employee:any
  constructor(private fb: FormBuilder,private service:CustomService,private router:Router,private toastr: ToastrService){
    this.itemForm = this.fb.group({
      u_id: [null],
      user_name: ['', Validators.required],
      e_mail: [''],
      password: [''],
      role: [''],

    });
  }

  onSubmit(){
this.service.Adddata(this.itemForm.value).subscribe((res)=>{
  this.employee=res
  console.log(this.employee);
  this.router.navigate(['listemp'])
  this.toastr.success('Sucess full data Added');

})

  }

}
