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
  title: any;

}
