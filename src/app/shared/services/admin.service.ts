import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  header: any
  jwttoken(): any {
    this.header = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }),
    }
    return this.header;
  }

  constructor(private http: HttpClient) {
  }

  getAdmin(data: any) {
    return this.http.post('http://localhost:5000/admin/login', data)
  }
  AddFrames(data: any) {
    return this.http.post('http://localhost:5000/frames', data, this.jwttoken())
  }
  viewFrames() {
    return this.http.get('http://localhost:5000/frames/getframes',this.jwttoken())
  }
  // editFrames(id: any, data: any) {
  //   return this.http.put('http://localhost:5000/frames/upadate/:id' + id, data)
  // }
}
