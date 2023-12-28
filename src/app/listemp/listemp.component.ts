import { Component } from '@angular/core';
import { CustomService } from '../custom.service';
import { first } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css'],
})
export class ListempComponent {
  employee: any;
  users!: any[];
  status_toggle = false;
  id!: string;
  loading: boolean | undefined;
  alertService: any;
  form: any;
  userId: number = 1;
  data: any[] = [];
  currentStatus: boolean = false;
  constructor(private service: CustomService, private toastr: ToastrService) {
    this.getlist();
  }
  ngOnInit() {
    this.getlist();
    this.fetchData();
  }

  getlist() {
    this.service.getdata().subscribe((res) => {
      this.employee = res;
    });
  }

  delete(u_id: any) {
    this.service.deletedata(u_id).subscribe((res) => {
      this.toastr.success('Data Delete Sucessfull');

    });
    this.fetchData();
  }

  fetchData(): void {
    this.service.getDatas().subscribe((response) => {
      this.data = response;
    });
  }

  updateStatusToggle(u_id: number, newStatus: boolean): void {
    this.service.updateStatusToggle(u_id, newStatus).subscribe(() => {
      const updatedData = this.data.map((item) =>
        item.id === u_id ? { ...item, status_toggle: newStatus } : item
      );
      this.data = updatedData;
    });
  }
  onToggleChange(event: MatSlideToggleChange,u_id: number,status_toggle: boolean): void {
    const newStatus = event.checked;
    this.service.updateStatusToggle(u_id, newStatus).subscribe(() => { });
  }
}
