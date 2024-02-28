import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';
import { CommonModule, } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent implements OnInit {
  prices!: any
  addPricesform!: FormGroup
  sizes: any
  thickness: any
  allFrames: any
  addbtn: boolean = true
  editbtn: boolean = false
  constructor(private fb: FormBuilder, private router: Router, private AdminApi: AdminService) { }

  ngOnInit(): void {
    this.addPricesform = this.fb.group({
      sizeId: ['', [Validators.required]],
      price: ['', [Validators.required]],
      thicknessId: ['', [Validators.required]],
      id: ['', [Validators.required]]
    })

    this.AdminApi.getSizes().subscribe((res) => {
      this.sizes = res
      console.log(this.sizes, "sizes")
    });

    this.AdminApi.getThickness().subscribe((res) => {
      this.thickness = res
      console.log(this.thickness, "thickness")
    })

    this.AdminApi.getAllframesWithprices().subscribe((res: any) => {
      this.allFrames = res
      console.log(this.allFrames, 'allframes')
    })
  }
  addPrice() {
    this.AdminApi.addPrices(this.addPricesform.value).subscribe((res) => {
      console.log(res, "prices")
      window.location.reload();
    })
  }

  editPrice(p: any) {

    this.addbtn = false
    this.editbtn = true
    this.addPricesform.patchValue({
      price: p.price,
      sizeId: p.sizeId,
      thicknessId: p.thicknessId,
      id: p._id
    })
  }

  updateSizes() {
    this.AdminApi.updatePrices(this.addPricesform.value).subscribe((res: any) => {
      console.log(res, 'up')
      window.location.reload();
    })
  }
  deleteprice(p: any) {

    this.AdminApi.deleteprice(p._id).subscribe((res) => {
      console.log(res, 'delete price')
      window.location.reload();
    })
  }
}

