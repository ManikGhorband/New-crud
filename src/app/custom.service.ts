import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomService {
 private url='http://23.22.246.141:8000/'
private apiUrl = 'http://23.22.246.141:8000/api/temp-users';
private updateapi="http://23.22.246.141:8000/api/temp-users/ ";
  constructor(private http:HttpClient) { }

Adddata(data:any):Observable<any>{
  return this.http.post(this.url+"api/temp-users/", data);
}
getdata():Observable<any>{
  return this.http.get(this.url+"api/temp-users");
}
deletedata(u_id:any):Observable<any>{
  return this.http.delete(this.url+"api/temp-users/"+u_id);
}


getUser(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/${id}`);
}

updateUser(u_id: number, status_toggle: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${u_id+"/"}`, status_toggle);
}


getDatas(): Observable<any[]> {
  return this.http.get<any[]>(this.updateapi);
}

updateStatusToggle(u_id: number, newStatus: boolean): Observable<any> {
  const url = `http://23.22.246.141:8000/api/temp-users/${u_id}/update/`;
  return this.http.put(url, { status_toggle: newStatus });
}
}

