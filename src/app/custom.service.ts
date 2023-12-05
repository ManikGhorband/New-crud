import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomService {
url='http://localhost:3000/'

  constructor(private http:HttpClient) { }

Adddata(data:any):Observable<any>{
  return this.http.post(this.url+"emp", data);
}
getdata():Observable<any>{
  return this.http.get(this.url+"emp");
}


deletedata(id:any):Observable<any>{
  return this.http.delete(this.url+"emp/"+id);
}
// getbye(id:any,data:any):Observable<any>{

//   return this.http.put(this.url + "emp/" + id, data);
// }
// updateedata(id: any): Observable<any> {

//   return this.http.put(this.url+"emp/",id);

// }


}
