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
        Authorization: 'Bearer ' + localStorage.getItem('admin-token')
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
  Addprice(data: any) {
    return this.http.post('http://localhost:5000/price/addprice', data, this.jwttoken())
  }
  Getprice() {
    return this.http.get('http://localhost:5000/price/getprices', this.jwttoken())

  }

  Addthickness(data: any) {
    return this.http.post('http://localhost:5000/thickness/addthickness', data, this.jwttoken())

  }

  Getthickness() {
    return this.http.get('http://localhost:5000/thickness/getallthickness', this.jwttoken())

  };

  getSizes() {
    return this.http.get('http://localhost:5000/size/getsizes', this.jwttoken())
  }

  getThickness() {
    return this.http.get('http://localhost:5000/thickness/getAllthickness', this.jwttoken())
  }

  addPrices(data: any) {
    return this.http.post('http://localhost:5000/price/addprice', data, this.jwttoken())
  };

  updateSize(data: any) {
    return this.http.put('http://localhost:5000/size/updatesizeBy/' + data.id, data, this.jwttoken())
  };

  deleteSize(id: any) {
    return this.http.delete('http://localhost:5000/size/deletesizeBy/' + id, this.jwttoken());
  }

  updateThickness(data: any) {
    return this.http.put('http://localhost:5000/thickness/updateThicknessBy/' + data.id, data, this.jwttoken())
  }

  deleteThickness(id: any) {
    return this.http.delete('http://localhost:5000/thickness/deleteThicknessBy/' + id, this.jwttoken());
  }

  getAllframesWithprices() {
    return this.http.get('http://localhost:5000/price/getframes', this.jwttoken())
  }

  updatePrices(data: any) {
    return this.http.put('http://localhost:5000/price/updatePrice/' + data.id, data, this.jwttoken())
  }
  deleteprice(id: any) {
    return this.http.delete('http://localhost:5000/price/deletePrice/' + id, this.jwttoken());

  }
  orderlist() {
    return this.http.get('http://localhost:5000/cart/getcart', this.jwttoken())
  }
  
}
