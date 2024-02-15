import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent implements OnInit {
  priceForm!: FormGroup;
  size: any;
  thickness: any;
  orderData: any = [];
  grandTotal: number = 0;
  income: number = this.grandTotal;
  t: any;
  s: any;
  constructor(private adminApi: AdminService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.adminApi.Getprice().subscribe((res: any) => {
      this.size = res;
    });

    this.adminApi.Getprice().subscribe((res: any) => {
      this.getPrice = res;
    });

    this.priceForm = this.fb.group({
      sizeId: ['', [Validators.required]],
      thicknessId: ['', [Validators.required]],
      price: [null, [Validators.required]],

    });
  }
  get total() {
    return this.s * this.t;
  }
  getPrice(p: any) {
    let pr = this.size.find((f: any) => f.productname == p.target.value);

    this.priceForm.patchValue({
      price: Number(pr.price),
    });
  }

  totalPrice(tt: any) {
    let tot = this.priceForm.value.price * tt.target.value;

    this.priceForm.patchValue({
      total: Number(tot),
    });
  }
  order() {
    this.income += this.grandTotal;
    console.log(this.income, 'ghfj');

    this.grandTotal += this.priceForm.value.total;
    if (this.orderData.length === 0) {
      this.orderData = {
        mobilenumber: this.priceForm.value.mobilenumber,
        orderDetails: [
          {
            product: this.priceForm.value.product,
            price: this.priceForm.value.price,
            quantity: this.priceForm.value.quantity,
            total: this.priceForm.value.total,
          },
        ],
        grandTotal: this.grandTotal,
        income: this.income,
      };
    } else {
      let ordersProduct = {
        product: this.priceForm.value.product,
        price: this.priceForm.value.price,
        quantity: this.priceForm.value.quantity,
        total: this.priceForm.value.total,
      };

      this.orderData.orderDetails.push(ordersProduct);
      this.orderData.grandTotal = this.grandTotal;
      this.orderData.income = this.income;
    }
    console.log(this.orderData, 'od');

    this.priceForm.reset();
  }
  clear() {

  }

}

