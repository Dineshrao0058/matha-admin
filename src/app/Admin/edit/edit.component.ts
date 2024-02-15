import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  addPricesform!: FormGroup
  sizes:any
  thickness:any
  constructor(private fb: FormBuilder, private router: Router, private AdminApi: AdminService) { }

  ngOnInit(): void {
    this.addPricesform = this.fb.group({
      sizeId: ['', [Validators.required]],
      price: ['', [Validators.required]],
      thicknessId: ['', [Validators.required]]
    })

    this.AdminApi.getSizes().subscribe((res)=>{
      this.sizes = res
      console.log(this.sizes,"sizes")
    });

    this.AdminApi.getThickness().subscribe((res)=>{
      this.thickness = res
      console.log(this.thickness,"thickness")
    })
  }
  addPrice() {
    this.AdminApi.addPrices(this.addPricesform.value).subscribe((res)=>{
      console.log(res,"prices")
    })
  }
}
// editForm!: FormGroup;
// size!: string;
// prices!: string;
// thickness!: string
// constructor(private AdminApi: AdminService,
//   private fb: FormBuilder,
//   private Routes: Router) { }

// ngOnInit(): void {
//   this.editForm = this.fb.group({
//     size: ['', [Validators.required]],
//     price: ['', [Validators.required]],
//     thickness: ['', [Validators.required]]
//   })
// }
// editframe() {
//   this.AdminApi.editFrames(this.editForm.value).subscribe((res: any) => {
//     if (res) {
//       localStorage.setItem('add', JSON.stringify(res))
//       this.Routes.navigate([''])
//       alert('edited sucesfully')
//     }
//   })
// }

