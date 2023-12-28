import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ListempComponent } from './listemp/listemp.component';
import { EditComponent } from './edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListempComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,  ToastrModule.forRoot(),
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule, ToastrModule.forRoot(),MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
