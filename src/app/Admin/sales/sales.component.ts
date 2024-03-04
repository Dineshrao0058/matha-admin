import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements OnInit {

  orders: any
  total= 0
  constructor(private adminApi: AdminService) {

  }

  ngOnInit(): void {
    this.adminApi.orderlist().subscribe((res: any) => {
      console.log(res);
      this.orders = res
      let t = this.orders.map((p: any) => Number(p.price)  * Number(p.quantity))
      this.total = t
    })
  }

}
