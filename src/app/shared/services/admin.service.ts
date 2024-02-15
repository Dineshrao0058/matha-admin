import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  viewproduct() {
    throw new Error('Method not implemented.');
  }
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

  Addsize(data: any) {
    return this.http.post('http://localhost:5000/size/addsize', data, this.jwttoken())
  }

  Getsize() {
    return this.http.get('http://localhost:5000/size/getsizes', this.jwttoken())
  }
  Addprice(data:any) {
    return this.http.post('http://localhost:5000/price/addprice', data, this.jwttoken())
  }
  Getprice(){
    return this.http.get('http://localhost:5000/price/getprices', this.jwttoken())

  }
  // viewFrames() {
  //   return this.http.get('http://localhost:5000/frames/getframes', this.jwttoken())
  // }

  Addthickness(data:any) {
    return this.http.post('http://localhost:5000/thickness/addthickness', data, this.jwttoken())

  }

  Getthickness(){
    return this.http.get('http://localhost:5000/thickness/getallthickness', this.jwttoken())

  };

  getSizes(){
    return this.http.get('http://localhost:5000/size/getsizes',this.jwttoken())
  }

  getThickness(){
    return this.http.get('http://localhost:5000/thickness/getAllthickness',this.jwttoken())
  }

  addPrices(data:any){
    return this.http.post('http://localhost:5000/price/addprice',data,this.jwttoken())
  }
 

}
