import { Component } from '@angular/core';
import { CustomService } from '../custom.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent {
employee: any;
id!: string;
  loading: boolean | undefined;
  alertService: any;
  form: any;
constructor(private service:CustomService){
this.getlist();
this.getby(this.id,this.data);
}
ngOnInit(){

}

getlist(){
  this.service.getdata().subscribe((res)=>{
    this.employee=res
  })
}

delete(id:any){
  this.service.deletedata(id).subscribe((res)=>{
alert("user delete")
  })
  this.getlist()
}
getby(id:any,data:any){
  // this.service.getbye(this.id,this.data).subscribe((res)=>{

  // })
}
  data(id: string, data: any) {
    throw new Error('Method not implemented.');
  }
// editItem(id:number){
//   this.service.updateedata(id,).subscribe((res)=>{})
// }
 updateUser() {
  // this.service.updateedata(this.id)
  //     .pipe(first())
  //     .subscribe(() => {
  //         this.alertService.success('User updated', { keepAfterRouteChange: true });
  //        // this.router.navigate(['../../'], { relativeTo: this.route });
  //     })
  //     .add(() => this.loading = false);
}
}
