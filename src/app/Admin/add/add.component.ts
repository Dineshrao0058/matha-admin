import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent implements OnInit {
  AddForm!: FormGroup;
  frames!: any;
  sizeid!: any
  addbtn: boolean = true
  editbtn: boolean = false
  constructor(
    private AdminApi: AdminService,
    private fb: FormBuilder,
    private Routes: Router
  ) { }

  ngOnInit(): void {
    this.AddForm = this.fb.group({
      size: ['', [Validators.required]],
      id: ['', [Validators.required]],
    });
    this.AdminApi.Getsize().subscribe((res: any) => {
      this.frames = res;
    });
  }

  addSizes() {
    this.AdminApi.Addsize(this.AddForm.value).subscribe((res: any) => {
      console.log(res);
      this.Routes.navigate(['/add'])
    });
  }

  editSize(s: any) {
    this.addbtn = false
    this.editbtn = true
    this.AddForm.patchValue({
      size: s.size,
      id: s._id,
    });

  }

  updateSizes() {
    this.AdminApi.updateSize(this.AddForm.value).subscribe((res: any) => {
      console.log(res);
    });
    this.Routes.navigate(['/add'])
  };

  deleteSize(a: any) {
    this.AdminApi.deleteSize(a._id).subscribe((res) => {
      console.log(res, 'delete size')
      this.Routes.navigate(['/add'])
    })
  }

}
