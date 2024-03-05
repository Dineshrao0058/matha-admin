import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '../../constants';

@Injectable({
  providedIn: 'root'

})
export class AdminService {

  
  serverUrl = CONSTANTS.serverUrl
  
  jwttoken(): any {
    const header = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('admin-token')
      }),
    } 
    return header;
    
  }

  constructor(private http: HttpClient) {

  }

  getAdmin(data: any) {
    return this.http.post(this.serverUrl + '/admin/login/', data)
  }

  Addsize(data: any) {
    return this.http.post(this.serverUrl + '/size/addsize', data, this.jwttoken())
  }
  Getsize() {
    return this.http.get(this.serverUrl + '/size/getsizes', this.jwttoken())
  }
  Addprice(data: any) {
    return this.http.post(this.serverUrl + '/price/addprice', data, this.jwttoken())
  }
  Getprice() {
    return this.http.get(this.serverUrl + '/price/getprices', this.jwttoken())
  }
  Addthickness(data: any) {
    return this.http.post(this.serverUrl + '/thickness/addthickness', data, this.jwttoken())
  }
  Getthickness() {
    return this.http.get(this.serverUrl + '/thickness/getallthickness', this.jwttoken())
  };
  getSizes() {
    return this.http.get(this.serverUrl + '/size/getsizes', this.jwttoken())
  }
  getThickness() {
    return this.http.get(this.serverUrl + '/thickness/getAllthickness', this.jwttoken())
  }
  addPrices(data: any) {
    return this.http.post(this.serverUrl + '/price/addprice', data, this.jwttoken())
  };
  updateSize(data: any) {
    return this.http.put(this.serverUrl + '/size/updatesizeBy/' + data.id, data, this.jwttoken())
  };
  deleteSize(id: any) {
    return this.http.delete(this.serverUrl + '/size/deletesizeBy/' + id, this.jwttoken());
  }
  updateThickness(data: any) {
    return this.http.put(this.serverUrl + '/thickness/updateThicknessBy/' + data.id, data, this.jwttoken())
  }
  deleteThickness(id: any) {
    return this.http.delete(this.serverUrl + '/thickness/deleteThicknessBy/' + id, this.jwttoken());
  }
  getAllframesWithprices() {
    return this.http.get(this.serverUrl + '/price/getframes', this.jwttoken())
  }
  updatePrices(data: any) {
    return this.http.put(this.serverUrl + '/price/updatePrice/' + data.id, data, this.jwttoken())
  }
  deleteprice(id: any) {
    return this.http.delete(this.serverUrl + '/price/deletePrice/' + id, this.jwttoken());
  }
  orderlist() {
    return this.http.get(this.serverUrl + '/cart/getcart', this.jwttoken())
  }
}
