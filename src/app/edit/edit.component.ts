import { Component } from '@angular/core';
import { CustomService } from '../custom.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  u_id!: number;
  userData: any = [];

  constructor(private route: ActivatedRoute, private Service: CustomService, private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.updateUsers()
    this.route.params.subscribe((params) => {
      this.u_id = +params['id'];
      this.fetchUserData();
    });
  }

  fetchUserData() {
    this.Service.getUser(this.u_id).subscribe((data) => {
      this.userData = data;
    });
  }

  updateUsers() {
    this.Service.updateUser(this.u_id, this.userData).subscribe(() => {
      this.router.navigate(['listemp']);
      this.toastr.success('Data Update Sucessfull');
    });
  }
  
}
